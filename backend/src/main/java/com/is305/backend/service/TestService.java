package com.is305.backend.service;

import com.is305.backend.entity.TestUser;
import com.is305.backend.mapper.MainMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

@Service
public class TestService {

    @Resource
    MainMapper mapper;

    public TestUser getUserById(int id) {
        return mapper.getUserById(id);
    }
}
