package com.is305.backend.controller;

import com.is305.backend.Exception.UsernameOrPasswordErrorException;
import com.is305.backend.Util.LoginUtil;
import com.is305.backend.Util.UserUtil;
import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Date;

// dev version
@RestController
public class LoginController {

    @Autowired
    UserService userService;

    @PostMapping("/login")
    public String login(HttpServletResponse response, @RequestParam("username") String username, @RequestParam("password") String password) {
        User user = userService.getUserByUsername(username);
        if (Arrays.equals(user.getPassword(), UserUtil.hashPassword(password))) {
            Cookie cookie = new Cookie("username", user.getUsername());
            cookie.setMaxAge(24 * 60 * 60);
            response.addCookie(cookie);
            cookie = new Cookie("token", LoginUtil.bytes2String(user.getToken()));
            cookie.setMaxAge(24 * 60 * 60);
            response.addCookie(cookie);
            user.setLastLogin(new Date());
            user.setToken(LoginUtil.getRandomToken());
            return "Login successfully!";
        } else {
            throw new UsernameOrPasswordErrorException();
        }
    }

    @GetMapping("/logout")
    public String logout(HttpServletResponse response) {
        Cookie cookie = new Cookie("username", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        cookie = new Cookie("token", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return "Logout successfully!";
    }

}
