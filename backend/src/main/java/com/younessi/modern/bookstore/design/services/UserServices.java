package com.younessi.modern.bookstore.design.services;

import com.younessi.modern.bookstore.design.entities.User;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Configurable
public interface UserServices {

    public List<User> getAllUsers();
    public User getUserByUsername(String username);
    public User saveUser(User user);


}
