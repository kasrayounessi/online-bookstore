package com.younessi.modern.bookstore.design.controllers;

import com.younessi.modern.bookstore.design.entities.Book;
import com.younessi.modern.bookstore.design.services.BookServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BookController {

    @Autowired
    private BookServices service;

    @GetMapping("/books/{customer}")
    public List<Book> getBookByCustomer(@PathVariable("customer") String customer){
        return service.findAllBooksByCustomer(customer);
    }

    @GetMapping("/books/{customer}/{title}")
    public Book getBookByCustomerAndTitle(@PathVariable("customer") String customer, @PathVariable("title") String title){
        return service.findBookByCustomerAndTitle(customer, title);
    }

    @PostMapping("/books/{customer}")
    public void postBook(@RequestBody Book newBook){
        String title = newBook.getTitle();
        String customer = newBook.getCustomer();
        int quantityToAdd = newBook.getQuantity();

        Book bookInsideDatabase = service.findBookByCustomerAndTitle(customer, title);


        if(bookInsideDatabase!= null){
            //int quantityInsideDatabase = bookInsideDatabase.getQuantity();
            System.out.println(bookInsideDatabase);
            service.updateQuantity(quantityToAdd, bookInsideDatabase);
        } else {
            service.saveBook(newBook);
        }



    }

    @PostMapping("/books/delete/{book}")
    public void deleteBook(@RequestBody Book bookToDelete){
        String title = bookToDelete.getTitle();
        String customer = bookToDelete.getCustomer();

        Book bookInsideDatabase = service.findBookByCustomerAndTitle(customer, title);
        System.out.println(bookInsideDatabase);

        if(bookInsideDatabase!= null){
            int currentQuantity = bookToDelete.getQuantity();
            long bookId = bookToDelete.getId();
            if(currentQuantity > 1) {
                service.decrementQuantity(bookId);
            }else{
                service.deleteBookById(bookId);
            }
        } else{
            System.out.println("no book");
        }


    }

    @GetMapping("/books/deleteall/{customer}")
    public void purchaseAllBooks(@PathVariable("customer") String username){
        service.purchaseAllBooks(username);
    }


}
