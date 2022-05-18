package com.is305.backend.controller;

import com.is305.backend.entity.Blog;
import com.is305.backend.service.BlogService;
import com.is305.backend.service.StarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/star")
public class StarController {

    @Autowired
    StarService starService;
    @Autowired
    BlogService blogService;

    @GetMapping("")
    public ResponseEntity<String> setStar(@RequestParam("id") long id, @RequestParam("username") String username) {
        starService.setStar(id, username);
        return new ResponseEntity<>("Star successfully!", HttpStatus.OK);
    }

    @DeleteMapping("")
    public ResponseEntity<String> cancelStar(@RequestParam("id") long id, @RequestParam("username") String username) {
        starService.cancelStar(id, username);
        return new ResponseEntity<>("Cancel star successfully!", HttpStatus.OK);
    }

    @GetMapping("/username")
    public ResponseEntity<List<Blog>> getStarBlogs(@RequestParam("username") String username) {
        List<Blog> blogList = new ArrayList<>();
        long[] idArray = starService.getStars(username);
        for (long l : idArray) {
            blogList.add(blogService.getBlogById(l));
        }
        return new ResponseEntity<>(blogList, HttpStatus.OK);
    }

    //the number of users who have starred the blog
    @GetMapping("/blogNums")
    public ResponseEntity<Integer> getCountBlogs(@RequestParam("id") long id) {
        return new ResponseEntity<>(starService.getCountById(id), HttpStatus.OK);
    }

    //get the number of blogs a user has starred
    @GetMapping("/userNums")
    public ResponseEntity<Integer> getCountUsers(@RequestParam("username") String username) {
        return new ResponseEntity<>(starService.getCountByUsername(username), HttpStatus.OK);
    }


}
