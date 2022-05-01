package com.is305.backend;

import com.is305.backend.Exception.IllegalHexException;
import com.is305.backend.Util.LoginUtil;
import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@SpringBootTest
class BackendApplicationTests {

    @Autowired
    UserService userService;


    @Test
    void contextLoads() {
    }

    @Test
    void testCreateAndDeleteUsers() {
        userService.clearUsers();
        RestTemplate client = new RestTemplate();
        HttpHeaders headers = new HttpHeaders();
        HttpMethod method = HttpMethod.POST;
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.set("username", "Alice");
        params.set("avatar", null);
        params.set("email", "Alice@email.com");
        params.set("password", "Welcome Alice!");
        HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);
        client.exchange("http://localhost:8080/register/", method, entity, String.class);
        User user = userService.getUserByUsername("Alice");
        Assertions.assertNotNull(user);

        params.clear();
        params.set("username", "Alice");
        params.set("password", "Welcome Alice!");
        entity = new HttpEntity<>(params, headers);
        ResponseEntity<String> response = client.exchange("http://localhost:8080/login/", method, entity, String.class);
        Assertions.assertEquals("Login successfully!", response.getBody());

        userService.deleteUser(user);
    }

    @Test
    void testBytesAndString() throws IllegalHexException {
        String hex = "0102030405060708090a0b0c0d0e0f10111213ff";
        byte[] bytes = {0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x10, 0x11, 0x12, 0x13, (byte) 0xff};
        Assertions.assertArrayEquals(bytes, LoginUtil.string2Bytes(hex));
        Assertions.assertArrayEquals(hex.toCharArray(), LoginUtil.bytes2String(bytes).toCharArray());
    }

}
