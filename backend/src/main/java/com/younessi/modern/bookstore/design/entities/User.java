package com.younessi.modern.bookstore.design.entities;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@ToString
@Table(
        name="users",
        uniqueConstraints = @UniqueConstraint(
                name="username_unique",
                columnNames = "username"
        ))
public class User {
    @Id @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    @Column(
            name = "username",
            nullable = false
    )
    private String username;

    @Column (nullable = false)
    private String password;


    public User(){}

    public User(String username, String password) {
        this.username = username;
        this.password = password;


    }
}

