package com.is305.backend.mapper;

import com.is305.backend.entity.Blog;
import org.apache.ibatis.annotations.*;

import java.util.Date;
import java.util.List;

@Mapper
public interface BlogMapper {
    @Insert("Insert INTO m_blog VALUES(null,#{username},#{title},#{description},#{content},#{created},#{status});")
    void creatBlog(@Param("username") String username, @Param("title") String title, @Param("description") String description, @Param("content") String content, @Param("created") Date created, @Param("status") boolean status);

    @Delete("DELETE FROM m_blog WHERE id=#{id};")
    void deleteBlogById(@Param("id") long id);

    @Delete("DELETE FROM m_blog;")
    void clearBlogs();

    @Select("SELECT * FROM m_blog WHERE id=#{id};")
    Blog getBlogById(@Param("id") long id);

    @Update("UPDATE m_blog SET title=#{title},description=#{description},content=#{content},status=#{status} WHERE id=#{id};")
    void updateBlogById(@Param("id") long id, @Param("title") String title, @Param("description") String description, @Param("content") String content, @Param("status") boolean status);

    @Select("SELECT * FROM m_blog WHERE username=#{username};")
    List<Blog> getBlogByUsername(@Param("username") String username);
}


