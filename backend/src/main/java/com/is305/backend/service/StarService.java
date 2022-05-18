package com.is305.backend.service;

import com.is305.backend.Exception.NoTargetUserOrBlogException;
import com.is305.backend.Exception.StarException;
import com.is305.backend.mapper.BlogMapper;
import com.is305.backend.mapper.StarMapper;
import com.is305.backend.mapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;

@Service
public class StarService {

    @Resource
    private StarMapper starMapper;
    @Resource
    private UserMapper userMapper;
    @Resource
    private BlogMapper blogMapper;

    public void setStar(long id, String username){
        if(userMapper.getUserByUserName(username) != null && blogMapper.getBlogById(id) != null){
            try{
                starMapper.setStar(id,username);
            } catch (Exception exception) {
                // If the relationship has existed in the table, it will throw a new exception.
                try {
                    throw exception.getCause();
                } catch (Throwable throwable) {
                    throw new StarException();
                }
            }
        } else {
            System.out.println(id);
            System.out.println(username);
            throw new NoTargetUserOrBlogException();
        }
    }

    public void cancelStar(long id, String username) {
        starMapper.cancelStar(id,username);
    }

    public long[] getStars(String username) {
        return starMapper.getStars(username);
    }

    public Integer getCountById(long id) {return starMapper.getCountById(id);}

    public Integer getCountByUsername(String username) {return starMapper.getCountByUsername(username);}
}
