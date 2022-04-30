package com.example.demo;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    public User getUser(Long id);
}
