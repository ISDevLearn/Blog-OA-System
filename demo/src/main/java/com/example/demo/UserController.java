package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/getUser")
    public User GetUser(@RequestParam(value = "id") Long id) {
        return userService.getUser(id);
    }

    @RequestMapping("/cookie")
    public String setCookie(HttpServletResponse response) {
        Cookie cookie = new Cookie("user", "name");
        cookie.setMaxAge(24 * 60 * 60);
        response.addCookie(cookie);
        return "Cookie is added.";
    }

    @RequestMapping("/readcookie")
    public String readCookie(@CookieValue(value="user") String username) {
        return String.format("Hello, %s!", username);
    }

}
