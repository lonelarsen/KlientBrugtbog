$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function(err, data){
        if(err) throw err;

        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book, i) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author  + "</td>" +
                "<td>" + book.edition + "</td>" +
                "<td>" + book.isbn + "</td>" +
                "</tr>");
        });
    });

    //Fires on page-load
    SDK.Ad.getAll(function(err, data){
        if(err) throw err;

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookTitle+ "</td>" +
                "<td>" + ad.bookAuthor  + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td>" + ad.pris + "</td>" +
                "</tr>");
        });
    });

    /**
     * Add a new Ad
     */
    $("#addNewAdButton").on("click", function () {

        //Show modal
        $('#newAdModal').modal('show');

        $("#createAdButton").on("click", function(){

            //Create JSON object
            var ad = {
                isbn: parseInt($("#adIsbn").val()),
                rating: parseInt($("#adRating").val()),
                comment: $("#adComment").val(),
                price: parseInt($("#adPrice").val()),
                //publisherId: $("input[name=publisherRadios]:checked").val()
            };

            //Create ad
            SDK.Ad.create(ad, function(err, data){
                if(err) throw err;

                $("#newAdModal").modal("hide");
            });
        });
    });

    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });
});