$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function(err, data){
        if(err) throw err;

        var $adsTableBody = $("#booksTableBody");
        data.forEach(function (book, i) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author  + "</td>" +
                "<td>" + book.edition + "</td>" +
                "<td>" + book.isbn + "</td>" +
                "</tr>");
        });

    });

});

