package com.is305.backend.controller;

import com.is305.backend.Exception.*;
import com.mysql.cj.jdbc.exceptions.MysqlDataTruncation;
import org.apache.tomcat.util.http.fileupload.impl.FileSizeLimitExceededException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class ExceptionHandlingController {

    @ExceptionHandler({UserCreatedException.class})
    public ResponseEntity<String> userHasBeenCreated() {
        return new ResponseEntity<>("This user has been created before.", HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler({BlogCreatedException.class})
    public ResponseEntity<String> blogCreatedFailed() {
        return new ResponseEntity<>("Blog created failed.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({UsernameOrPasswordErrorException.class})
    public ResponseEntity<String> usernameOrPasswordError() {
        return new ResponseEntity<>("The username or password is wrong.", HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({NoLoginException.class, ExpirationException.class, IllegalLoginException.class})
    public ResponseEntity<String> loginStatusError() {
        return new ResponseEntity<>("The user login status is wrong.", HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler({NoTargetUserException.class})
    public ResponseEntity<String> noTargetUserError() {
        return new ResponseEntity<>("The target user doesn't exist.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({NoTargetUserOrBlogException.class})
    public ResponseEntity<String> noTargetUserOrBlogError() {
        return new ResponseEntity<>("The target user or blog doesn't exist.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({FollowedException.class})
    public ResponseEntity<String> followedBeforeError() {
        return new ResponseEntity<>("The user has followed following before.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({StarException.class})
    public ResponseEntity<String> starBeforeError() {
        return new ResponseEntity<>("The user has starred the blog before.", HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler({IllegalQueryException.class})
    public ResponseEntity<String> illegalQueryException() {
        return new ResponseEntity<>("This is an illegal query.", HttpStatus.UNAUTHORIZED);
    }

    @ExceptionHandler({FileSizeLimitExceededException.class, MysqlDataTruncation.class})
    public ResponseEntity<String> fileSizeLimitExceeded() {
        return new ResponseEntity<>("The file size is too large.", HttpStatus.FORBIDDEN);
    }

    @ExceptionHandler({AddressException.class, MessagingException.class})
    public ResponseEntity<String> illegalAddress() {
        return new ResponseEntity<>("Illegal Address.", HttpStatus.NOT_FOUND);
    }
}
