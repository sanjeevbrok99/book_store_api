import express from "express";
import {
   createBook
  } from "../controllers/book.controller.js";

  
  const router = express.Router();
  
  router.route('/create').post(createBook)
  export default router;