package com.younessi.modern.bookstore.design.repositories;


import com.younessi.modern.bookstore.design.entities.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {
    @Query("select b from Book b where b.customer = :customer_adding and b.title = :book_title")
    Book findBookByCustomerAndTitle(@Param("customer_adding") String customer, @Param("book_title") String title);

    @Query("select b from Book b where b.customer = ?1")
    List<Book> findAllBooksByCustomer(String customer);

   @Modifying
    @Transactional
    @Query("update Book b SET b.quantity = b.quantity + :quantity_to_add WHERE b.id = :book_id")
    void updateQuantity(@Param("quantity_to_add") int quantity, @Param("book_id") long id);

   @Modifying
   @Transactional
   @Query("delete from Book b where b.id = :book_id")
    void deleteBookById(@Param("book_id") long bookId);


    @Modifying
    @Transactional
    @Query("update Book b SET b.quantity = b.quantity - 1 WHERE b.id = :book_id")
    void decrementQuantity( @Param("book_id") long bookId);

    @Modifying
    @Transactional
    @Query("delete from Book b where b.customer = :customer_deleted")
    void purchaseBooks(@Param("customer_deleted") String username);
}
