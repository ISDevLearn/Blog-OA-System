package com.is305.backend.Interceptor;

import com.is305.backend.Exception.ExpirationException;
import com.is305.backend.Exception.IllegalLoginException;
import com.is305.backend.Exception.NoLoginException;
import com.is305.backend.Exception.NoTargetUserException;
import com.is305.backend.Util.CookieUtil;
import com.is305.backend.Util.LoginUtil;
import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Date;

@Component
public class LoginStatusInterceptor implements HandlerInterceptor {

    static final long EXPIRATION_MS = 24L * 60 * 60 * 60 * 1000;

    @Autowired
    UserService userService;

    /**
     * <p>Check whether the login is legal.</p>
     * <p>If not, this method will throw different {@code RuntimeException} and trigger different {@code ExceptionHandler}</p>
     *
     * @param request  request
     * @param response response
     * @param handler  handler
     * @return super method
     * @throws Exception exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if (request.getMethod().equals("POST") && request.getRequestURI().equals("/user/")) {
            return true;
        }
        Cookie[] cookies = request.getCookies();
        if (cookies == null) {
            throw new NoLoginException();
        }
        Cookie cookie = CookieUtil.getTokenInCookie(cookies);
        byte[] token = cookie != null ? LoginUtil.stringToBytes(cookie.getValue()) : null;
        cookie = CookieUtil.getUsernameInCookie(cookies);
        String username = cookie != null ? cookie.getValue() : null;
        if (token == null || username == null) {
            // If there are no tokens or usernames, the user hasn't logged in yet.
            throw new NoLoginException();
        } else {
            User user = userService.getUserByUsername(username);
            if (user == null) {
                // If the user doesn't exist, throw the exception to warn the handler.
                throw new NoTargetUserException();
            }
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
