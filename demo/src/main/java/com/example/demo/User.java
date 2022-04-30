package com.example.demo;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;


@Data
public class User implements Serializable {
    private Long id;
    private String username;
    private String avatar;
    private String email;
    private String password;
    private Integer status;
    private LocalDateTime created;
    private LocalDateTime lastLogin;
}
