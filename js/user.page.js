$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function (err, data) {
        if (err) throw err;

        function printAuthors(authors) {
            return authors.map(function (author) {
                return user.username;
            }).join(", ");
        }
