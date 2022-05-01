package com.is305.backend.controller;

import com.is305.backend.Exception.IllegalLoginException;
import com.is305.backend.Exception.NoLoginException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LoginHandlingController {

    @ExceptionHandler({NoLoginException.class, IllegalLoginException.class})
    public String redirect2Login() {
        return "redirect:/login";
    }

}
