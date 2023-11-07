import Book from "../models/book.js";

export const createBook = async (req, res) => {
    try {
        const { title,author,summary } = req.body;
      const book = await Book.create(req.body);
      
      res.status(201).json(book);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

