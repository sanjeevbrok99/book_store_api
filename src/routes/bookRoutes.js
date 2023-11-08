import express from "express";
import {
   createBook,
   listAllBook,
   getBookById,
   updateBook,
   deleteBook
  } from "../controllers/book.controller.js";

  
  const router = express.Router();
  
  router.route('/create').post(createBook)
  router.route('/getAll').get(listAllBook)
  router.route('/getBook/:id').get(getBookById)

  router.route('/update/:id').put(updateBook)
  router.route('/delete/:id').delete(deleteBook)

  export default router;