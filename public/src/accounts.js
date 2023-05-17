function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) => nameA.name.last > nameB.name.last ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
  const userID = account.id;
  let counter = 0;
  const total = books.reduce((account, books) => {
    const borrowRecord = books.borrows;
    const mapID = borrowRecord.map((record) => record.id);
    if(mapID.includes(userID)) account++;
    return account;
  }, counter);
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
