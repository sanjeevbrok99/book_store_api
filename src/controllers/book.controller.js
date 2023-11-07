import Book from "../models/book.js";

export const createBook = async (req, res) => {
    try {
        const { title,author,summary } = req.body;
      const book = await Book.create(req.body);
      
      res.status(201).json(book);
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: error.message });
    }
  };

export const listAllBook =  async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Internal Server error' });
    }
  };
