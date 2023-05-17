function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  // filter for returned being set to false
  const nowBorrowed = books.filter(
    (book) => book.borrows[0].returned === false
  );
  return nowBorrowed.length;
}

function getMostCommonGenres(books) {
  // define genre var and map over books array, 
  // get genre property from the book object in callback fn
  const genre = books.map((book) => book.genre);
  const result = [];
  const count = {};
  // iterate over each element in the genre array
  genre.forEach((index) => {
    count[index] = (count[index] || 0) + 1;
  });
  // loop over each key in the count object,
  // then push new object into result array
  for (let key in count) {
    result.push({
      name: key,
      count: count[key],
    });
  }
  // sort the result array in descending order based on count property,
  // then return result array containing first five most common genres
  result.sort((a, b) => (a.count < b.count ? 1 : -1));
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  const slicedBook = books.length > 5 ? 5 : books.length;
  return books
    .map((book) => {
      return {
        name: book.title,
        count: book.borrows.length,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, slicedBook);
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  authors.forEach((authors) => {
    const returnAuthor = {
      name: `${authors.name.first} ${authors.name.last}`,
      count: 0,
    };
    books.forEach((book) => {
      if (book.authorId === authors.id) {
        returnAuthor.count += book.borrows.length;
      }
    });
    result.push(returnAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
