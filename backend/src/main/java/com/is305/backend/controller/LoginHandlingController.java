package com.is305.backend.controller;

import com.is305.backend.Exception.ExpirationException;
import com.is305.backend.Exception.IllegalLoginException;
import com.is305.backend.Exception.NoLoginException;
import com.is305.backend.Exception.UsernameOrPasswordErrorException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LoginHandlingController {

    @ExceptionHandler({
            ExpirationException.class,
            IllegalLoginException.class,
            NoLoginException.class,
            UsernameOrPasswordErrorException.class
    })
    public String redirect2Login() {
        return "redirect:/login";
    }

}
