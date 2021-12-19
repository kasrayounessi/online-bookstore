package com.younessi.modern.bookstore.design.controllers;

import com.younessi.modern.bookstore.design.entities.User;
import com.younessi.modern.bookstore.design.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserServices service;

    @GetMapping("/users")
    public List<User> getUsers(){
        return service.getAllUsers();
    }

    @GetMapping("/users/{username}")
    public User getUsers(@PathVariable("username") String username){
        return service.getUserByUsername(username);
    }

    @PostMapping("/users")
    public User postUser(@RequestBody User newUser){
        return service.saveUser(newUser);
    }
}
