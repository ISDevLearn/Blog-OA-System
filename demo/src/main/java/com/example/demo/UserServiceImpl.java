package com.example.demo;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class UserServiceImpl implements UserService{

    @Resource
    private UserMapper userMapper;
    @Override
    public User getUser(Long id) {
        return userMapper.getUser(id);
    }
}
