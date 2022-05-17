package com.is305.backend.controller;

import com.is305.backend.Exception.IllegalQueryException;
import com.is305.backend.Util.CookieUtil;
import com.is305.backend.entity.Blog;
import com.is305.backend.service.BlogService;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    BlogService blogService;

    @PostMapping("/")
    public ResponseEntity<String> createBlog(HttpServletRequest request, @NotNull @RequestParam("username") String username, @NotNull @RequestParam("title") String title, @NotNull @RequestParam("description") String description, @NotNull @RequestParam("content") String content) {
        checkLegalUsername(request, username);
        blogService.createBlog(username, title, description, content);
        return new ResponseEntity<>("Create the blog successfully!", HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Blog> getBlogById(HttpServletRequest request, @PathVariable("id") long id) {
        checkLegalId(request, id);
        return new ResponseEntity<>(blogService.getBlogById(id), HttpStatus.OK);
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<List<Blog>> getBlogByUsername(HttpServletRequest request, @PathVariable("username") String username) {
        checkLegalUsername(request, username);
        return new ResponseEntity<>(blogService.getBlogByUsername(username), HttpStatus.OK);
    }

    @PutMapping("/")
    public ResponseEntity<String> updateBlog(HttpServletRequest request, @RequestParam("id") long id, @RequestParam(value = "title", required = false) String title, @RequestParam(value = "description", required = false) String description, @RequestParam(value = "content", required = false) String content) {
        checkLegalId(request, id);
        blogService.updateBlog(id, title, description, content);
        return new ResponseEntity<>("Update blog successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBlog(HttpServletRequest request, @PathVariable("id") long id) {
        checkLegalId(request, id);
        blogService.deleteBlogById(id);
        if (blogService.getBlogById(id) == null) {
            return new ResponseEntity<>("Delete the blog successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail to delete this blog.", HttpStatus.NOT_FOUND);
        }
    }

    private void checkLegalId(HttpServletRequest request, @RequestParam("id") long id) {
        Cookie cookie = CookieUtil.getUsernameInCookie(request.getCookies());
        if (cookie == null) {
            throw new IllegalQueryException();
        }
        String username = blogService.getBlogById(id).getUsername();
        if (username == null || !username.equals(cookie.getValue())) {
            throw new IllegalQueryException();
        }
    }

    private void checkLegalUsername(HttpServletRequest request, String username) {
        Cookie cookie = CookieUtil.getUsernameInCookie(request.getCookies());
        if (cookie == null) {
            throw new IllegalQueryException();
        } else if (!username.equals(cookie.getValue())) {
            throw new IllegalQueryException();
        }
    }

}
