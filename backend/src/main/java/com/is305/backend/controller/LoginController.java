package com.is305.backend.controller;

import com.is305.backend.entity.AccessToken;
import com.is305.backend.entity.User;
import com.is305.backend.exception.UsernameOrPasswordErrorException;
import com.is305.backend.interceptor.PassToken;
import com.is305.backend.service.UserService;
import com.is305.backend.util.LoginUtil;
import com.is305.backend.util.UserUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Date;

// dev version
@RestController
public class LoginController {

    @Autowired
    UserService userService;

    @PassToken
    @PostMapping("/login/")
    public AccessToken login(HttpServletResponse response, @RequestParam("username") String username, @RequestParam("password") String password) {
        User user = userService.getUserByUsername(username);
        if (user == null) {
            throw new UsernameOrPasswordErrorException();
        } else if (Arrays.equals(user.getPassword(), UserUtil.hashPassword(password))) {
            byte[] token = LoginUtil.getRandomToken();
            user.setLastLogin(new Date());
            user.setToken(token);
            userService.updateUserLastLoginAndToken(new Date(), token, username);
            AccessToken accessToken = new AccessToken();
            accessToken.setUsername(username);
            accessToken.setToken(LoginUtil.bytesToString(token));
            return accessToken;
        } else {
            throw new UsernameOrPasswordErrorException();
        }
    }

    @PassToken
    @GetMapping("/logout")
    public AccessToken logout(HttpServletResponse response) {
        return new AccessToken();
    }

}
