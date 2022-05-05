package com.is305.backend.service;

import com.is305.backend.Exception.FollowedException;
import com.is305.backend.Exception.NoTargetUserException;
import com.is305.backend.mapper.FollowerMapper;
import com.is305.backend.mapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;

@Service
public class FollowerService {

    @Resource
    private FollowerMapper followerMapper;
    @Resource
    private UserMapper userMapper;

    public void setFollowing(String follower, String following) {
        if (userMapper.getUserByUserName(follower) != null && userMapper.getUserByUserName(following) != null) {
            try {
                followerMapper.setFollowing(follower, following);
            } catch (Exception exception) {
                // If the user has existed in the table, it will throw a new exception.
                // This is to help the handler recognize different exceptions.
                try {
                    throw exception.getCause();
                } catch (Throwable throwable) {
                    throw new FollowedException();
                }
            }
        } else {
            throw new NoTargetUserException();
        }
    }

    public void cancelFollowing(String follower, String following) {
        followerMapper.cancelFollowing(follower, following);
    }

    public ArrayList<String> getFollowers(String username) {
        return followerMapper.getFollowers(username);
    }

    public ArrayList<String> getFollowings(String username) {
        return followerMapper.getFollowings(username);
    }
}
