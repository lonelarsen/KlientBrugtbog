$(document).ready(function () {

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
});

