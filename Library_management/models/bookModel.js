var db = require.main.require('./models/config');

var getAll = (callback) => {
    var sql = "SELECT * FROM books";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var searchBy = (searchBy, word, callback) => {
    var sql = "SELECT * FROM books WHERE "+searchBy+" = ?";
    db.executeQuery(sql, [word], function(result) {
        callback(result);
    });
};

var createBook = (book, callback) => {
    var date = new Date();
    var sql = "INSERT INTO books VALUES(null, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    db.executeQuery(sql, [0, book.genre, book.title, book.author, book.publisher, book.edition, book.isbn, book.pages, date], function(result) {
        callback(result);
    });
};

var getBook = (id, callback) => {
    var sql = "SELECT * FROM books WHERE book_id=?";
    db.executeQuery(sql, [id], function(result) {
        callback(result[0]);
    });
};

var updateBook = (id, book, callback) => {
    var sql = "UPDATE books SET genre = ?, title = ?, author = ?, publisher = ?, edition = ?, isbn = ?, pages = ? WHERE book_id = ?";
    db.executeQuery(sql, [book.genre, book.title, book.author, book.publisher, book.edition, book.isbn, book.pages, id], function(result) {
        callback(result);
    });
};

var deleteBook = (id, callback) => {
    var sql = "DELETE FROM books WHERE book_id = ?";
    db.executeQuery(sql, [id], function(result) {
        callback(result);
    });
};

var issueBook = (book_id, customer_id, callback) => {
    var date = new Date();
    var sql = "UPDATE books SET user_id = ?, date_issued = ? WHERE book_id = ?";
    db.executeQuery(sql, [customer_id, date, book_id], function(result) {
        callback(result);
    });
};

var unissueBook = (book_id, callback) => {
    var sql = "UPDATE books SET user_id = '', date_issued = '' WHERE book_id = ?";
    db.executeQuery(sql, [book_id], function(result) {
        callback(result);
    });
};

var getIssuedBooks = (id, callback) => {
    var sql = "SELECT * FROM books WHERE NOT user_id = ''";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var getUnborrowedBooks = (callback) => {
    var sql = "SELECT * FROM books WHERE (user_id = 'NULL') OR (user_id = 0)";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var bookRequest = (customer_id, book, callback) => {
    var date = new Date();
    var sql = "INSERT INTO books_request VALUES(null, ?, ?, ?, ?, ?, ?, ?)";
    db.executeQuery(sql, [customer_id, book.genre, book.title, book.author, book.edition, book.isbn, date], function(result) {
        callback(result);
    });
};

var customerSearch = (searchBy, word, callback) => {
    var sql = "(SELECT * FROM books WHERE "+searchBy+" = ?) AND ((user_id = '') OR (user_id = 0))";
    db.executeQuery(sql, [word], function(result) {
        callback(result);
    });
};

var getRequestedBooks = (callback) => {
    var sql = "SELECT * FROM books_request";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var bookRequestSearch = (searchBy, word, callback) => {
    var sql = "SELECT * FROM books_request WHERE "+searchBy+" = ?";
    db.executeQuery(sql, [word], function(result) {
        callback(result);
    });
};

var setIssueDate = (book_id, customer_id, callback) => {
    var date = new Date();
    var sql = "INSERT INTO issue_date VALUES(null, ?, ?, ?)";
    db.executeQuery(sql, [book_id, customer_id, date], function(result) {
        callback(result);
    });
};

var booksIssuedByCustomer = (customer_id, callback) => {
    var sql = "SELECT * FROM books WHERE user_id = ?";
    db.executeQuery(sql, [customer_id], function(result) {
        callback(result);
    });
};

var getAllBorrowedBooks = (callback) => {
    var sql = "SELECT * FROM issue_date";
    db.executeQuery(sql, null, function(result) {
        callback(result);
    });
};

var totalBorrowed30 = (callback) => {
    var result = new Date();
    var newDate = result.setDate(result.getDate() + 30);
    var sql = "SELECT books.*, issue_date.book_id FROM issue_date INNER JOIN books ON issue_date.book_id=books.book_id WHERE (date BETWEEN ? AND ?)";
    db.executeQuery(sql, [newDate, result], function(result) {
        callback(result);
    });
};

var mostBorrowedBook = (callback) => {
    var sql = "SELECT books.*, issue_date.book_id, COUNT(*) AS magnitude FROM issue_date INNER JOIN books ON issue_date.book_id=books.book_id GROUP BY books.isbn ORDER BY magnitude DESC LIMIT 1";
    db.executeQuery(sql, null, function(result) {
        callback(result[0]);
    });
};

var mostRequestedBook = (callback) => {
    var sql = "SELECT *, COUNT(*) AS magnitude FROM books_request GROUP BY isbn ORDER BY magnitude DESC LIMIT 1";
    db.executeQuery(sql, null, function(result) {
        callback(result[0]);
    });
};

// SELECT books.*, issue_date.book_id, COUNT(*) AS magnitude FROM issue_date INNER JOIN books ON issue_date.book_id=books.book_id WHERE (date BETWEEN '2018-07-10' AND '2018-08-10') GROUP BY books.isbn ORDER BY magnitude DESC LIMIT 1


module.exports = {
    getAll,
    searchBy,
    createBook,
    getBook,
    updateBook,
    deleteBook,
    issueBook,
    unissueBook,
    getIssuedBooks,
    getUnborrowedBooks,
    bookRequest,
    customerSearch,
    getRequestedBooks,
    bookRequestSearch,
    setIssueDate,
    booksIssuedByCustomer,
    getAllBorrowedBooks,
    totalBorrowed30,
    mostRequestedBook,
    mostBorrowedBook
};
