$(document).ready(function () {

    //Fires on page-load
    SDK.Ads.getAll(function(err, data){
        if(err) throw err;

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ads) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ads.bookTitle + "</td>" +
                "<td>" + ads.book.author  + "</td>" +
                "<td>" + ads.book.edition + "</td>" +
                "<td>" + ads.book.isbn + "</td>" +
                "</tr>");
        });
    });
});

