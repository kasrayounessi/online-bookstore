package com.younessi.modern.bookstore.design.entities;

import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Data
@ToString
@Table(
        name = "books"
)
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String title;

    private int quantity;

    @Column(
            name="customer"
    )
    private String customer;

    public Book(){}

    public Book(String title, int quantity, String customer) {
        this.title = title;
        this.quantity = quantity;
        this.customer = customer;
    }
}
