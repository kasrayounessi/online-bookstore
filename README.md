# Read Cheap Online Bookstore

## Project Description

The bookstore uses Google Books API to retrieve books based on genres and book title. The users can create accounts, login, and add books to their cart. They can surf the page using the genres specified on the navbar, or using the searchbar (below Navbar) to search the title of their desired book. The frontend follows the single-page design paradigm and includes several dynamic features such as carousels, dropdown items, and CSS transitions.

## Technologies Used

* Java - version 11
* Spring Boot - version 2.6.1
* ReactJS - version 17.0.2
* Bootstrap - 4.6.1
* CSS - 3

## Features

List of features ready and TODOs for future development
* A registration system with a password checker that rejects short or passwords not involving a diverse selection of characters
* Login as a user and add items to your shopping cart.
* All included genres have a collection of books presented in the form of carousel on the home page

To-do list:
* Implement a checkout system accepting credit cards
* Add more features to the profiles of the users

## Getting Started
   
git clone https://github.com/kasrayounessi/online-bookstore.git

There are two files in this repository, backend and frontend.

Backend must be opened inside a Java IDE, (Intellij Idea was used for this project) and it must be connected to the MySQL server. The name of the database required in the MySQL server is bookstore. Please adjust your MySQL root credentials inside the application.properties.

In order to run the frontend, make sure you have npm package installed. we must run these commands inside the frontend directory.
* npm install
* npm start

## Usage

Please refer to the repository to view images of the frontend (in two states of user being logged in and logged out) and sample backend responses. 

## Contributors

* Kasra Younessi
* Brandon Carrasco

## License

This project uses the following license: [<MIT_LICENSE>](<link>).

