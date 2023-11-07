import express from "express";
import {
   createBook,
   listAllBook,
   getBookById,
   updateBook
  } from "../controllers/book.controller.js";

  
  const router = express.Router();
  
  router.route('/create').post(createBook)
  router.route('/getAll').get(createBook)
  router.route('/getBook/:id').get(createBook)

  router.route('/update/:id').put(createBook)

  export default router;