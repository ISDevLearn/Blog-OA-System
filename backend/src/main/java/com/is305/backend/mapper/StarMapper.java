package com.is305.backend.mapper;

import org.apache.ibatis.annotations.*;

import java.util.ArrayList;

@Mapper
public interface StarMapper {

    @Insert("INSERT INTO m_star VALUES(#{id},#{username});")
    void setStar(@Param("id") long id, @Param("username") String username);

    @Delete("DELETE FROM m_star WHERE id=#{id} AND username=#{username};")
    void cancelStar(@Param("id") long id, @Param("username") String username);

    @Select("SELECT id FROM m_star WHERE username=#{username};")
    long[] getStars(@Param("username") String username);

    @Select("SELECT COUNT(*) FROM m_star WHERE id = #{id};")
    Integer getCountById(@Param("id")long id);

    @Select("SELECT COUNT(*) FROM m_star WHERE username=#{username};")
    Integer getCountByUsername(@Param("username") String username);
}
