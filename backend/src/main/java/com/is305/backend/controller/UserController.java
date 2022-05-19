package com.is305.backend.controller;

import com.is305.backend.entity.User;
import com.is305.backend.interceptor.PassToken;
import com.is305.backend.service.UserService;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @PassToken
    @PostMapping("/")
    public ResponseEntity<String> createUser(@Valid @RequestParam("username") String username, @RequestParam(value = "avatar", required = false) MultipartFile avatar, @Valid @Email @RequestParam("email") String email, @NotNull @RequestParam("password") String password) throws IOException {
        userService.createUser(username, avatar == null ? null : avatar.getBytes(), email, password);
        return new ResponseEntity<>("Create the user successfully!", HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        return new ResponseEntity<>(userService.getUserByUsername(username), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<String> updateUser(@RequestParam(value = "username", required = false) String username, @RequestParam(value = "avatar", required = false) MultipartFile avatar, @RequestParam(value = "email", required = false) String email, @RequestParam(value = "password", required = false) String password, @RequestParam(value = "old_username") String oldUsername) throws IOException {
        userService.updateByUsername(username, avatar == null ? null : avatar.getBytes(), email, password, oldUsername);
        return new ResponseEntity<>("Update user successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable("username") String username) {
        userService.deleteUserByUsername(username);
        if (userService.getUserByUsername(username) == null) {
            return new ResponseEntity<>("Delete the user successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail to delete this user.", HttpStatus.NOT_FOUND);
        }
    }

}
