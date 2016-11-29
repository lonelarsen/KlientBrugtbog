$(document).ready(function () {

    //All Books
    SDK.Book.getAll(function(err, data){
        if(err) throw err;

        var $booksTableBody = $("#booksTableBody");
        data.forEach(function (book, i) {

            $booksTableBody.append(
                "<tr>" +
                "<td>" + book.title + "</td>" +
                "<td>" + book.author + "</td>" +
                "<td>" + book.edition + "</td>" +
                "<td>" + book.isbn + "</td>" +
                "</tr>");
        });
    });

    //All Ads
    SDK.Ad.getAll(function(err, data){
        if(err) throw err;

        var $adsTableBody = $("#adsTableBody");
        data.forEach(function (ad) {

            $adsTableBody.append(
                "<tr>" +
                "<td>" + ad.bookTitle + "</td>" +
                "<td>" + ad.bookAuthor + "</td>" +
                "<td>" + ad.bookEdition + "</td>" +
                "<td>" + ad.isbn + "</td>" +
                "<td>" + ad.rating + "</td>" +
                "<td>" + ad.price + "</td>" +
                "<td>" + ad.comment + "</td>" +
                "<td><button class='reserveAdButton' data-adId=" + ad.adId + ">Reserver</button></td>" +
                "</tr>");
        });

        /**
         * Reserve an Ad
         */
        $(".reserveAdButton").on("click", function(){
            var $reserveAdButton = $(this);
            var adId = {
                id: $reserveAdButton.data("adid")
            };

            //Reserve Ad
            SDK.Ad.reserve(adId, function (err, data){
                if (err) throw err;
                location.reload();
            });
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
            };

            //Create ad
            SDK.Ad.create(ad, function(err){
                if(err) throw err;

                $("#newAdModal").modal("hide");
            });
        });
    });

    //My Ads
    SDK.Ad.getMyAds(function(err, data){
        if(err) throw err;

        var $myAdsTableBody = $("#myAdsTableBody");
        data.forEach(function (myad){

            function locked(){
                if (myad.locked == 1){
                    return "Ja"
                }
                else {
                    return "Nej"
                }
            }

            $myAdsTableBody.append(
                "<tr>" +
                "<td>" + myad.isbn + "</td>" +
                "<td>" + myad.rating + "</td>" +
                "<td>" + myad.price + "</td>" +
                "<td>" + myad.comment + "</td>" +
                "<td>" + locked() + "</td>" +
                "<td><button class='unlockMyAdButton' data-adId=" + myad.adId + ">Fjern reservation</button></td>" +
                "</tr>");
        });

        /**
         * Unlock My Ad
         */
        $(".unlockMyAdButton").on("click", function(){
            var $unlockMyAdButton = $(this);
            var adId = {
                id: $unlockMyAdButton.data("adid")
            };

            //Unlock Ad Reservation
            SDK.Ad.unlockMyAd(adId, function (err){
                if (err) throw err;
                location.reload();
            });
        });
    });

    //My Ad Reservations
    SDK.Ad.getMyAdReservations(function(err, data){
        if(err) throw err;

        var $myAdReservationsTableBody = $("#myAdReservationsTableBody");
        data.forEach(function (reservation) {

            $myAdReservationsTableBody.append(
                "<tr>" +
                "<td>" + reservation.bookIsbn + "</td>" +
                "<td>" + reservation.timestamp + "</td>" +
                "<td>" + reservation.userUsername + "</td>" +
                "<td>" + reservation.userPhonenumber + "</td>" +
                "<td><button class='deleteAdReservationButton' data-adId=" + reservation.adId + ">Slet reservation</button></td>" +
                "</tr>");
        });

        /**
         * Delete My Reservation
         */
        $(".deleteAdReservationButton").on("click", function(){
            var $deleteAdReservationButton = $(this);
            var adId = {
                id: $deleteAdReservationButton.data("adid")
            };

            //Delete Ad Reservation
            SDK.Ad.deleteAdReservation(adId, function (err){
                if (err) throw err;
                location.reload();
            });
        });
    });

    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });
});