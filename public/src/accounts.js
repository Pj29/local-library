function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last > nameB.name.last ? 1 : -1
  );
}

function getTotalNumberOfBorrows(account, books) {
  const userID = account.id;
  let counter = 0;
  // use reduce method to iterate over each book object
  const total = books.reduce((account, books) => {
    const borrowRecord = books.borrows;
    // map over the borrowRecord array, assign the id property to mapID
    const mapID = borrowRecord.map((record) => record.id);
    // check if mapID includes userID,
    // if so, user has borrowed a book & increment account by 1
    if (mapID.includes(userID)) account++;
    return account;
  }, counter);
  // return final accumulated value 
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  return books
    .filter((book) =>
      book.borrows.some(
        (acc) => acc.id === account.id && acc.returned === false
      )
    )
    .map((book) => {
      const author = authors.find((author) => author.id === book.authorId);
      book.author = author;
      return book;
    });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
