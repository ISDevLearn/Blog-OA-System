package com.is305.backend.controller;

import com.is305.backend.entity.Blog;
import com.is305.backend.service.BlogService;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/blog")
public class BlogController {

    @Autowired
    BlogService blogService;

    @PostMapping("/")
    public ResponseEntity<String> createBlog(@NotNull @RequestParam("username") String username,
                                             @NotNull @RequestParam("title") String title,
                                             @NotNull @RequestParam("description") String description,
                                             @NotNull @RequestParam("content") String content)
            throws IOException{
        blogService.createBlog(username,title,description,content);
        return new ResponseEntity<>("Create the blog successfully!", HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Blog> getBlogById(@PathVariable("id") int id) {
        return new ResponseEntity<>(blogService.getBlogById(id), HttpStatus.OK);
    }

    @GetMapping("/{username}")
    public  ResponseEntity<List<Blog>> getBlogByUsername(@PathVariable("username") String username){
        return new ResponseEntity<>(blogService.getBlogByUsername(username), HttpStatus.OK);
    }


    @PutMapping("/")
    public ResponseEntity<String> updateBlog(@RequestParam("id") int id,
                                             @RequestParam(value = "title", required = false) String title,
                                             @RequestParam(value = "description", required = false) String description,
                                             @RequestParam(value = "content", required = false) String content)
            throws IOException {
        blogService.updateBlog(id,title,description,content);
        return new ResponseEntity<>("Update blog successfully.", HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBlog(@PathVariable("id") int id) {
        blogService.deleteBlogById(id);
        if (blogService.getBlogById(id) == null) {
            return new ResponseEntity<>("Delete the blog successfully.", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Fail to delete this blog.", HttpStatus.NOT_FOUND);
        }
    }


}
