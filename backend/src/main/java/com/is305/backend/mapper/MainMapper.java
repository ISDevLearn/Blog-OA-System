package com.is305.backend.mapper;

import com.is305.backend.entity.TestUser;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

@Mapper
public interface MainMapper {
    @Select("select * from test where id = #{id}")
    TestUser getUserById(int id);
}
