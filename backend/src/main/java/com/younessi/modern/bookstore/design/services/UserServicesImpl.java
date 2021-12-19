package com.younessi.modern.bookstore.design.services;

import com.younessi.modern.bookstore.design.entities.User;
import com.younessi.modern.bookstore.design.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class UserServicesImpl implements UserServices{

    @Autowired
    UserRepository userRepo;

    @Override
    public List<User> getAllUsers() {
        return userRepo.findAll();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepo.findByUsername(username);
    }

    @Override
    public User saveUser(User user) {
        return userRepo.save(user);
    }
}
