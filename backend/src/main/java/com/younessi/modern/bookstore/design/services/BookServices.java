package com.younessi.modern.bookstore.design.services;

import com.younessi.modern.bookstore.design.entities.Book;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Configurable
public interface BookServices {

    public List<Book> findAllBooksByCustomer(String customer);
    public Book findBookByCustomerAndTitle(String customer, String title);
    public Book saveBook(Book book);
    public void updateQuantity(int quantity, Book book);
    public void deleteBookById(long bookId);
    public void decrementQuantity(long bookId);
    public void purchaseAllBooks(String username);

}
