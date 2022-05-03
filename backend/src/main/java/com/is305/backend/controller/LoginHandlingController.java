package com.is305.backend.controller;

import com.is305.backend.Exception.ExpirationException;
import com.is305.backend.Exception.IllegalLoginException;
import com.is305.backend.Exception.NoLoginException;
import com.is305.backend.Exception.UsernameOrPasswordErrorException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class LoginHandlingController {

    @ExceptionHandler({java.sql.SQLIntegrityConstraintViolationException.class})
    public ResponseEntity<String> userHasBeenCreated() {
        return new ResponseEntity<>("This user has been created before.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({UsernameOrPasswordErrorException.class})
    public ResponseEntity<String> usernameOrPasswordError() {
        return new ResponseEntity<>("The username or password is wrong.", HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({NoLoginException.class, ExpirationException.class, IllegalLoginException.class})
    public ResponseEntity<String> loginStatusError() {
        return new ResponseEntity<>("The user login status is wrong.", HttpStatus.NOT_FOUND);
    }

}
