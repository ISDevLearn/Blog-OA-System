package com.is305.backend.mapper;

import com.is305.backend.entity.User;
import org.apache.ibatis.annotations.*;

import java.util.Date;

@Mapper
public interface UserMapper {

    @Select("SELECT * FROM m_user WHERE username=#{username};")
    User getUserByUserName(@Param("username") String userName);

    @Insert("INSERT INTO m_user VALUES(" +
            "#{username},#{avatar},#{email},#{password}," +
            "#{status},#{created},#{last_login},#{token});")
    void createUser(@Param("username") String username, @Param("avatar") byte[] avatar,
                    @Param("email") String email, @Param("password") byte[] password,
                    @Param("status") boolean status, @Param("created") Date created,
                    @Param("last_login") Date lastLogin, @Param("token") byte[] token);

    @Delete("DELETE FROM m_user WHERE username=#{username};")
    void deleteUser(@Param("username") String username);

    @Delete("DELETE FROM m_user;")
    void clearUsers();

}
