package com.is305.backend.Interceptor;

import com.is305.backend.Exception.ExpirationException;
import com.is305.backend.Exception.IllegalLoginException;
import com.is305.backend.Exception.NoLoginException;
import com.is305.backend.Util.LoginUtil;
import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Date;

@Component
public class UserInterceptor implements HandlerInterceptor {

    static final long EXPIRATION_MS = 24L * 60 * 60 * 60 * 1000;

    @Resource
    UserService userService;

    /**
     * <p>Check whether the login is legal.</p>
     * <p>If not, this method will throw different {@code RuntimeException} and trigger different {@code ExceptionHandler}</p>
     *
     * @param request  request
     * @param response response
     * @param handler  handler
     * @return whether the request is legal
     * @throws Exception exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Cookie[] cookies = request.getCookies();
        byte[] token = null;
        String username = null;
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("token")) {
                token = LoginUtil.string2Bytes(cookie.getValue());
            } else if (cookie.getName().equals("username")) {
                username = cookie.getValue();
            }
        }
        if (token == null || username == null) {
            // If there are no tokens or usernames, the user hasn't logged in yet.
            throw new NoLoginException();
        } else {
            User user = userService.getUserByUsername(username);
            Date now = new Date();
            if (!Arrays.equals(user.getToken(), token)) {
                // If the token doesn't match the one stored in the database, this request is illegal.
                throw new IllegalLoginException();
            } else if (now.getTime() - user.getLastLogin().getTime() > EXPIRATION_MS) {
                // If this token hasn't been updated more than 1 day, it needs update.
                throw new ExpirationException();
            }
        }
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }
}
