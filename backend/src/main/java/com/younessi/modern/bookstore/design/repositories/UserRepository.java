package com.younessi.modern.bookstore.design.repositories;

import com.younessi.modern.bookstore.design.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query("select u from User u where u.username = ?1")
    User findByUsername(String username);
}
