const Book = require("../models/Book");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllBooks = asyncWrapper(async (req, res) => {
  const books = await Book.find({});
  res.status(200).json({ books });
});

const createBook = asyncWrapper(async (req, res) => {
  const book = await Book.create(req.body);
  res.status(201).json({ book });
});

const getBook = asyncWrapper(async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findById({ _id: bookID });
  if (!book) {
    return next(createCustomError(`No book with id ${bookID} found`, 404));
  }
  return res.status(200).json({ book });
});

const updateBook = asyncWrapper(async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findOneAndUpdate({ _id: bookID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!book) {
    return next(createCustomError(`No book with id ${bookID} found`, 404));
  }

  res.status(200).json({ book });
});

const deleteBook = asyncWrapper(async (req, res) => {
  const { id: bookID } = req.params;
  const book = await Book.findOneAndDelete({ _id: bookID });
  if (!book) {
    return next(createCustomError(`no book with id ${bookID}`, 404));
  }
  res.status(200).json({ book });
});

module.exports = {
  getAllBooks,
  createBook,
  getBook,
  updateBook,
  deleteBook,
};
