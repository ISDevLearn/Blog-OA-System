package com.is305.backend.service;

import com.is305.backend.Util.LoginUtil;
import com.is305.backend.entity.User;
import com.is305.backend.mapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Date;

@Service
public class UserService {

    @Resource
    private UserMapper userMapper;

    public User getUserByUsername(String username) {
        return userMapper.getUserByUserName(username);
    }

    public void createUser(String username, byte[] avatar, String email, String password) {
        try {
            byte[] digest = MessageDigest.getInstance("md5").digest(password.getBytes());
            userMapper.createUser(username, avatar, email, digest, false, new Date(), new Date(), LoginUtil.getRandomToken());
        } catch (NoSuchAlgorithmException ignored) {
        }
    }


    public void deleteUser(User user) {
        userMapper.deleteUser(user.getUsername());
    }

    public void clearUsers() {
        userMapper.clearUsers();
    }

}
