function helperFn(array, id) {
  // return the first element from the inputted array that matches the id value
  return array.find((index) => index.id === id);
}

function findAuthorById(authors, id) {
  // helper function is called and returns author object with matching ID
  const found = helperFn(authors, id);
  return found;
}

function findBookById(books, id) {
  const found = helperFn(books, id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {
  // partition the books array into two separate arrays based on their borrowed status
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  const returnedBooks = books.filter(
    (book) => book.borrows[0].returned === true
  );
  return [checkedOut, returnedBooks];
}

function getBorrowersForBook(book, accounts) {
  // retrieve account objects for the borrowers of a given book then
  // map borrow objects, then find matching accounts based on the id
  const result = book.borrows.map((borrower) => {
    const result = accounts.find((account) => borrower.id === account.id);
    result.returned = borrower.returned;
    // return result obj
    return result;
  });
  // returned result is filtered to remove duplicate accounts
  return result.filter(
    (borrower, index) =>
      // use findIndex method to check if the index of the current borrower object is the same
      // as the first index
      result.findIndex((item) => item.id === borrower.id) === index
  );
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
