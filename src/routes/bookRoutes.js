import express from "express";
import {
   createBook,
   listAllBook
  } from "../controllers/book.controller.js";

  
  const router = express.Router();
  
  router.route('/create').post(createBook)
  router.route('/getAll').post(createBook)

  export default router;