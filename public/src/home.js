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
  // check if books array has more than 5 elements
  const numberOfBooks = books.length > 5 ? 5 : books.length;
  // map the books array into a new object and then sort in descending order based on count & slice
  return books
    .map((book) => {
      return {
        name: book.title,
        count: book.borrows.length,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, numberOfBooks);
}

function getMostPopularAuthors(books, authors) {
  const result = [];
  // iterate over authors array, then create a new object for each author
  authors.forEach((authors) => {
    const returnAuthor = {
      name: `${authors.name.first} ${authors.name.last}`,
      count: 0,
    };
    // check if authorId matches the id of current author in loop
    // if matched, increment the count of returnAuthor by the number of borrows for the current book
    books.forEach((book) => {
      if (book.authorId === authors.id) {
        returnAuthor.count += book.borrows.length;
      }
    });
    result.push(returnAuthor);
  });
  // sort in descending order based on the number of borrows,
  // then slice the array to only include the top 5 authors
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
