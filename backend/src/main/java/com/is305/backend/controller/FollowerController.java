package com.is305.backend.controller;

import com.is305.backend.service.FollowerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/follower")
public class FollowerController {

    @Autowired
    FollowerService followerService;

    @GetMapping("")
    public ResponseEntity<String> setFollowing(@RequestParam("follower") String follower, @RequestParam("following") String following) {
        followerService.setFollowing(follower, following);
        return new ResponseEntity<>("Follow successfully!", HttpStatus.OK);
    }

    @DeleteMapping("/")
    public ResponseEntity<String> cancelFollowing(@RequestParam("follower") String follower, @RequestParam("following") String following) {
        followerService.cancelFollowing(follower, following);
        return new ResponseEntity<>("Cancel following successfully!", HttpStatus.OK);
    }

    @GetMapping("/followers")
    public ResponseEntity<ArrayList<String>> getFollowers(@RequestParam("username") String username) {
        return new ResponseEntity<>(followerService.getFollowers(username), HttpStatus.OK);
    }

    @GetMapping("/followings")
    public ResponseEntity<ArrayList<String>> getFollowings(@RequestParam("username") String username) {
        return new ResponseEntity<>(followerService.getFollowings(username), HttpStatus.OK);
    }

}
