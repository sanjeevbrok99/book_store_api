import Book from "../models/book.js";

export const createBook = async (req, res) => {
    try {
        const { title,author,summary } = req.body;
      const book = await Book.create(req.body);
      
      res.status(201).json(book);
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: error.message,err:error });
    }
  };

// Get a list of all books

export const listAllBook =  async (req, res) => {
    try {
      const books = await Book.find();
      res.status(200).json(books);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Internal Server error',err:error });
    }
  };

  // Get details of a specific book by ID

export const getBookById =  async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(book);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Internal Server error' ,err:error});
    }
  };

// Update a book's details by ID

 export const updateBook =  async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!book) {
        return res.status(404).json({ error: 'Book not found',err:error });
      }
      res.status(200).json(book);
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Internal Server error',err:error });
    }
  };

export const deleteBook = async (req, res) => {
    try {
      const book = await Book.findByIdAndDelete(req.params.id);
      if (!book) {
        return res.status(404).json({ error: 'Book not found',err:error });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Internal Server error' });
    }
  };