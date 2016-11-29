$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function(err, data){
      if(err) throw err;

      var $booksTableBody = $("#booksTableBody");
      data.forEach(function (book) {

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
    SDK.User.getAll(function (err, data) {
      if (err) throw err;

      var $usersTableBody = $("#usersTableBody");
      data.forEach(function (user) {

        $usersTableBody.append(
            "<tr>" +
            "<td>" + user.username + "</td>" +
            "<td>" + user.phonenumber + "</td>" +
            "<td>" + user.address + "</td>" +
            "<td>" + user.email + "</td>" +
            "<td>" + user.mobilepay + "</td>" +
            "<td>" + user.cash + "</td>" +
            "<td>" + user.transfer + "</td>" +
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
            "<td>" + ad.price + "</td>" +
            "<td>" + ad.comment + "</td>" +
            "</tr>");
      });
    });

    var currentUser = SDK.User.current();
    $("#currentUserName").text(currentUser.username);

    /**
     * Add a new Book
     */
    $("#addNewBookButton").on("click", function () {

      //Show modal
      $('#newBookModal').modal('show');

      $("#createBookButton").on("click", function(){

        //Create JSON object
        var book = {
          title: $("#bookTitle").val(),
          author: $("#bookAuthor").val(),
          edition: $("#bookEdition").val(),
          isbn: parseInt($("#bookIsbn").val())
          //publisherId: $("input[name=publisherRadios]:checked").val()
        };

        //Create book
        SDK.Book.create(book, function(err, data){
          if(err) throw err;

          $("#newBookModal").modal("hide");
        });
      });
    });

    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });
});