package com.is305.backend.controller;


import com.is305.backend.exception.AddressException;
import com.is305.backend.exception.MessagingException;
import com.is305.backend.util.EmailUtil;
import com.is305.backend.entity.User;
import com.is305.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/email")
public class EmailController {

    @Autowired
    UserService userService;

    @PostMapping("/")
    public ResponseEntity<String> sendEmail(@RequestParam("email") String email, @RequestParam("username") String username) throws MessagingException, AddressException{
        User user = userService.getUserByUsername(username);
        EmailUtil.sentMail("Email Check",
        "这是一封激活邮件,激活请点击链接http://localhost:8080/email/Activation?code=" + user.getCode() + "&username=" + user.getUsername(),
        email);
        return new ResponseEntity<>("Send Email successfully!", HttpStatus.OK);
        }

    @GetMapping("/Activation")
    public ResponseEntity<String> activation(@RequestParam("code") String code, @RequestParam("username") String username){
        User user = userService.getUserByUsername(username);
        if(user.getCode().equals(code)){
            userService.updateUserStatus(user.getUsername(),true);
            return new ResponseEntity<>("Update Status successfully!", HttpStatus.OK);
        }
        else{
            return new ResponseEntity<>("Please check your email again.", HttpStatus.OK);
        }
    }
}
