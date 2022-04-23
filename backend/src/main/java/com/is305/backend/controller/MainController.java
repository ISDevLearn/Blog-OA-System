package com.is305.backend.controller;

import com.is305.backend.entity.TestUser;
import com.is305.backend.service.TestService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;

@Controller
public class MainController {

    @Resource
    TestService service;

    @RequestMapping("/test")
    @ResponseBody
    public String test() {
        TestUser user = service.getUserById(1);
        return user.getName();
    }
}
