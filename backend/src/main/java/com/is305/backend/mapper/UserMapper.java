package com.is305.backend.mapper;

import com.is305.backend.entity.User;
import org.apache.ibatis.annotations.*;

import java.util.Date;

@Mapper
public interface UserMapper {

    @Insert("INSERT INTO m_user VALUES(#{username},#{avatar},#{email},#{password},#{status},#{created},#{last_login},#{token});")
    void createUser(@Param("username") String username, @Param("avatar") byte[] avatar, @Param("email") String email, @Param("password") byte[] password, @Param("status") boolean status, @Param("created") Date created, @Param("last_login") Date lastLogin, @Param("token") byte[] token);

    @Delete("DELETE FROM m_user WHERE username=#{username};")
    void deleteUserByUserName(@Param("username") String username);

    @Delete("DELETE FROM m_user;")
    void clearUsers();

    @Select("SELECT * FROM m_user WHERE username=#{username};")
    User getUserByUserName(@Param("username") String userName);

    @Update("UPDATE m_user SET username=#{username},avatar=#{avatar},email=#{email},password=#{password}," + "status=#{status},created=#{created},last_login=#{last_login},token=#{token} WHERE username=#{old_username};")
    void updateUserByUserName(@Param("username") String username, @Param("avatar") byte[] avatar, @Param("email") String email, @Param("password") byte[] password, @Param("status") boolean status, @Param("created") Date created, @Param("last_login") Date lastLogin, @Param("token") byte[] token, @Param("old_username") String oldUsername);

    @Update("UPDATE m_user SET last_login=#{last_login},token=#{token} WHERE username=#{username}")
    void updateUserLastLoginAndToken(@Param("last_login") Date lastLogin, @Param("token") byte[] token, @Param("username") String username);
}
