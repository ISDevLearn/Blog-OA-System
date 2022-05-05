package com.is305.backend.mapper;

import org.apache.ibatis.annotations.*;

import java.util.ArrayList;

@Mapper
public interface FollowerMapper {

    @Insert("INSERT INTO m_follower VALUES(#{follower},#{following});")
    void setFollowing(@Param("follower") String follower, @Param("following") String following);

    @Delete("DELETE FROM m_follower WHERE follower=#{follower} AND following=#{following};")
    void cancelFollowing(@Param("follower") String follower, @Param("following") String following);

    @Select("SELECT follower FROM m_follower WHERE following=#{username};")
    ArrayList<String> getFollowers(@Param("username") String username);

    @Select("SELECT following FROM m_follower WHERE follower=#{username};")
    ArrayList<String> getFollowings(@Param("username") String username);

}
