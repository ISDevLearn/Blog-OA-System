package com.is305.backend.controller;

import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/")
    public String createUser(@RequestParam("username") String username, @RequestParam("avatar") byte[] avatar, @RequestParam("email") String email, @RequestParam("password") String password) {
        userService.createUser(username, avatar, email, password);
        User user = userService.getUserByUsername(username);
        if (user == null) {
            return "redirect:/user";
        } else {
            return "redirect:/login";
        }
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable("username") String username) {
        return userService.getUserByUsername(username);
    }

    @PutMapping("/")
    public String updateUser(@RequestParam("username") String username, @RequestParam("avatar") byte[] avatar, @RequestParam("email") String email, @RequestParam("password") String password, @RequestParam("old_username") String oldUsername) {
        userService.updateByUsername(username, avatar, email, password, oldUsername);
        return "Update user successfully!";
    }

    @DeleteMapping("/{username}")
    public String deleteUser(@PathVariable("username") String username) {
        userService.deleteUserByUsername(username);
        if (userService.getUserByUsername(username) == null) {
            return "Delete successfully!";
        } else {
            return "Some errors happened.";
        }
    }

}
