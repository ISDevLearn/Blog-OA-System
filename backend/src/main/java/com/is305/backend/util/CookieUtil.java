package com.is305.backend.util;

import javax.servlet.http.Cookie;

public class CookieUtil {

    static public Cookie getUsernameInCookie(Cookie[] cookies) {
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("username")) {
                return cookie;
            }
        }
        return null;
    }

    static public Cookie getTokenInCookie(Cookie[] cookies) {
        for (Cookie cookie : cookies) {
            if (cookie.getName().equals("token")) {
                return cookie;
            }
        }
        return null;
    }
}
