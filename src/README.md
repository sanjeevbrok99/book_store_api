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
- `POST http://3.110.179.29:8000/books/create`: Create a new book with a JSON request body containing the book's title, author, and summary.
- request body example:
{
  "title": "Vikings",
  "author": "Michael Hirst",
  "summary": "A historical drama television series that portrays Ragnar Lothbrok, a legendary Norse hero and explores the Viking age."
}


- `GET http://3.110.179.29:8000/books/getAll`: Retrieve a list of all books in the database.

- `GET http://3.110.179.29:8000/books/:id`: Retrieve details of a specific book by its ID.

- `PUT http://3.110.179.29:8000/books/:id`: Update a book's details by its ID using a JSON request body.

- `DELETE http://3.110.179.29:8000/books/:id`: Delete a book by its ID.

## Assumptions and Design Choices

- This application does not include built-in user authentication or authorization mechanisms

- I have implemented basic validation for creating books

- We have chosen to use the Express.js framework and Mongoose library for this implementation

- This example provides fundamental CRUD functionality

## Deploying the Book Management API on AWS EC2 (Ubuntu) with PM2

In this section, I'll guide you through the process of deploying the Book Management API on an AWS EC2 instance running Ubuntu. We will also open port 8000 to ensure accessibility to the application. 

### Step 1: SSH into EC2 Instance

Begin by connecting to My AWS EC2 instance using the following SSH command:

```bash
ssh -i "equartis.pem" ubuntu@ec2-3-110-179-29.ap-south-1.compute.amazonaws.com


Step 2: **Update and Upgrade System Packages**
 - sudo apt update
 - sudo apt upgrade

Step 3: **Install Node.js and npm**

- sudo apt install nodejs
- sudo apt install npm


Step 4: **Install Yarn**

- sudo npm install --global yarn

Step 5: **Install PM2**

- sudo npm install -g pm2

Step 6: **Cloned My Project Repository**

```
   git clone https://github.com/sanjeevbrok99/book_store_api.git
   cd book_store_api
   cd src

Step 7: **Installed Project Dependencies**
 - yarn

 Step 8: **Started My Application with PM2**
- I have Started my Node.js application with PM2 to ensure it runs continuously in the background
- pm2 start app.config.json

Step 9: **Opened Port 8000**
To open port 8000 and allow access to my application, i have configured my AWS security group to permit incoming traffic on this port.




