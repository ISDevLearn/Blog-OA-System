package com.is305.backend.service;

import com.is305.backend.Exception.UserCreatedException;
import com.is305.backend.Util.LoginUtil;
import com.is305.backend.Util.UserUtil;
import com.is305.backend.entity.User;
import com.is305.backend.mapper.UserMapper;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class UserService {

    @Resource
    private UserMapper userMapper;

    /**
     * <p>Create a user based on the assigned values.</p>
     * <p>The left values are assigned by default.</p>
     *
     * @param username username
     * @param avatar   avatar
     * @param email    email
     * @param password password
     */
    public void createUser(String username, byte[] avatar, String email, String password) {
        try {
            userMapper.createUser(username, avatar, email, UserUtil.hashPassword(password), false, new Date(), new Date(), LoginUtil.getRandomToken());
        } catch (Exception exception) {
            try {
                throw exception.getCause();
            } catch (Throwable throwable) {
                throw new UserCreatedException();
            }
        }
    }

    public void deleteUser(User user) {
        userMapper.deleteUserByUserName(user.getUsername());
    }

    public void deleteUserByUsername(String username) {
        userMapper.deleteUserByUserName(username);
    }

    public User getUserByUsername(String username) {
        return userMapper.getUserByUserName(username);
    }

    /**
     * <p>The value of status, created, last_login and token are all set by default.</p>
     * <p>If you want to keep some values and don't change them, just set the related ref into null.</p>
     *
     * @param username    new username
     * @param avatar      new avatar
     * @param email       new email
     * @param password    new password
     * @param oldUsername old username
     */
    public void updateByUsername(String username, byte[] avatar, String email, String password, String oldUsername) {
        User oldUser = userMapper.getUserByUserName(oldUsername);
        userMapper.updateUserByUserName(username == null ? oldUser.getUsername() : username,
                avatar == null ? oldUser.getAvatar() : avatar,
                email == null ? oldUser.getEmail() : email,
                password == null ? oldUser.getPassword() : UserUtil.hashPassword(password),
                oldUser.getStatus(), oldUser.getCreated(), oldUser.getLastLogin(), oldUser.getToken(), oldUsername);
    }

    public void updateUserLastLoginAndToken(Date lastLogin, byte[] token, String username) {
        userMapper.updateUserLastLoginAndToken(lastLogin, token, username);
    }

}
