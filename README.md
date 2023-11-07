# book-store-api-nodejs

This is a Node.js application for managing a book database using MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for books.

## Stacks

- JavaScript
- Node js
- Express js
- MongoDB

## Server Installation and Local Development
``` 
1. Clone this repository to your local machine:

   ```
   git clone https://github.com/sanjeevbrok99/book_store_api.git
   cd book_store_api
   cd src
   

## Install the required dependencies using yarn:
    yarn

### This will run server
yarn dev
### API Endpoints
- `POST /books/create`: Create a new book with a JSON request body containing the book's title, author, and summary.

- `GET /books/getAll`: Retrieve a list of all books in the database.

- `GET /books/:id`: Retrieve details of a specific book by its ID.

- `PUT /books/:id`: Update a book's details by its ID using a JSON request body.

- `DELETE /books/:id`: Delete a book by its ID.

## Assumptions and Design Choices

- This application does not include built-in user authentication or authorization mechanisms

- I have implemented basic validation for creating books

- We have chosen to use the Express.js framework and Mongoose library for this implementation

- This example provides fundamental CRUD functionality
