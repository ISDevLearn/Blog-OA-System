package com.is305.backend;

import com.is305.backend.service.FollowerService;
import com.is305.backend.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {

    @Autowired
    UserService userService;
    @Autowired
    FollowerService followerService;


    @Test
    void contextLoads() {
        followerService.cancelFollowing("Alice", "Bob");
    }
}
