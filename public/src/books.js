function helperFn(array, id) {
  return array.find((index) => index.id === id);
}

function findAuthorById(authors, id) {
  const found = helperFn(authors, id);
  return found;
}

function findBookById(books, id) {
  const found = helperFn(books, id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  const returnedBooks = books.filter(
    (book) => book.borrows[0].returned === true
  );
  return [checkedOut, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map((borrower) => {
    const result = accounts.find((account) => borrower.id === account.id);
    result.returned = borrower.returned;
    return result;
  });
  return result.filter(
    (borrower, index) =>
      result.findIndex((item) => item.id === borrower.id) === index
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
