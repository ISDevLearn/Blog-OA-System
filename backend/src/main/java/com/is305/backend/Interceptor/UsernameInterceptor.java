package com.is305.backend.Interceptor;

import com.is305.backend.Exception.IllegalQueryException;
import com.is305.backend.Util.CookieUtil;
import com.is305.backend.service.FollowerService;
import com.is305.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class UsernameInterceptor implements HandlerInterceptor {

    @Autowired
    UserService userService;
    @Autowired
    FollowerService followerService;

    /**
     * <p>Check whether the username in cookie matches the one in params.</p>
     * <p>This will help to filter some illegal queries.</p>
     *
     * @param request  request
     * @param response response
     * @param handler  handler
     * @return super method
     * @throws Exception exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Cookie cookie = CookieUtil.getUsernameInCookie(request.getCookies());
        String username = request.getParameter("username");
        if (cookie != null && cookie.getValue().equals(username)) {
            // If the usernames match, return.
            return HandlerInterceptor.super.preHandle(request, response, handler);
        }
        throw new IllegalQueryException();
    }
}
