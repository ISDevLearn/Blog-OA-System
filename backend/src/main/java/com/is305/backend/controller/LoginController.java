package com.is305.backend.controller;

import com.is305.backend.Exception.UsernameOrPasswordErrorException;
import com.is305.backend.Util.LoginUtil;
import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Arrays;

// dev version
@RestController
public class LoginController {

    final UserService userService;

    public LoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestParam("username") String username, @RequestParam("password") String password) {
        User user = userService.getUserByUsername(username);
        try {
            if (Arrays.equals(user.getPassword(), MessageDigest.getInstance("md5").digest(password.getBytes()))) {
                user.setToken(LoginUtil.getRandomToken());
                return "Login successfully!";
            } else {
                throw new UsernameOrPasswordErrorException();
            }
        } catch (NoSuchAlgorithmException exception) {
            return "";
        }
    }

    @PostMapping("/register")
    public String register(@RequestParam("username") String username, @RequestParam("avatar") byte[] avatar, @RequestParam("email") String email, @RequestParam("password") String password) {
        userService.createUser(username, avatar, email, password);
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return "redirect:/register";
        } else {
            return "redirect:/login";
        }
    }

    @GetMapping("/setCookie")
    public String setCookie(HttpServletResponse response) {
        User user = userService.getUserByUsername("Alice");
        while (user == null) {
            userService.createUser("Alice", new byte[]{0x0}, "Alice@email.com", "123");
            user = userService.getUserByUsername("Alice");
        }
        Cookie cookie = new Cookie("username", user.getUsername());
        cookie.setMaxAge(24 * 60 * 60);
        response.addCookie(cookie);
        cookie = new Cookie("token", LoginUtil.bytes2String(user.getToken()));
        cookie.setMaxAge(24 * 60 * 60);
        response.addCookie(cookie);
        return "Set cookie successfully!";
    }

    @GetMapping("/clearCookie")
    public String clearCookie(HttpServletResponse response) {
        Cookie cookie = new Cookie("username", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        cookie = new Cookie("token", null);
        cookie.setMaxAge(0);
        response.addCookie(cookie);
        return "Clear cookie successfully!";
    }

}
