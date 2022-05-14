package com.is305.backend.service;

import com.is305.backend.Exception.BlogCreatedException;
import com.is305.backend.entity.Blog;
import com.is305.backend.mapper.BlogMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;
import java.util.List;

@Service
public class BlogService {

    @Resource
    private BlogMapper blogMapper;

    /**
     * <p>Create a blog based on the assigned values.</p>
     * <p>The left values are assigned by default.</p>
     *
     * @param username username
     * @param title  title
     * @param description    description
     * @param content content
     */
    public void createBlog(String username, String title, String description, String content){
        try{
            blogMapper.creatBlog(username,title,description,content,new Date(),true);
        }catch (Exception exception){
            try {
                throw exception.getCause();
            } catch (Throwable throwable) {
                throw new BlogCreatedException();
            }
        }
    }

    public void deleteBlog(Blog blog){blogMapper.deleteBlogById(blog.getId());}

    public void deleteBlogById(int id){blogMapper.deleteBlogById(id);}

    public Blog getBlogById(int id){return blogMapper.getBlogById(id);}

    /**
     * <p>Update a blog based on the assigned values.</p>
     * <p>The left values are assigned by default.</p>
     *
     * @parm  id   id
     * @param title  title
     * @param description    description
     * @param content content
     */
    public void updateBlog(int id,String title, String description, String content){
        Blog oldBlog = blogMapper.getBlogById(id);
        blogMapper.updateBlogById(id,
                title == null ? oldBlog.getTitle() : title,
                description == null ? oldBlog.getDescription() : description,
                content == null ? oldBlog.getContent() : content,
                true);
    }

    public List<Blog> getBlogByUsername(String username){return blogMapper.getBlogByUsername(username);}

}
