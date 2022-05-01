package com.is305.backend.Interceptor;

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

@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Resource
    UserService userService;

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
            throw new NoLoginException();
        } else {
            User user = userService.getUserByUsername(username);
            if (!Arrays.equals(user.getToken(), token)) {
                throw new IllegalLoginException();
            }
        }
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }
}
