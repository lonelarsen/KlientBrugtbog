$(document).ready(function () {

    //Fires on page-load
    SDK.Book.getAll(function (err, data) {
        if (err) throw err;

    $("#addNewUser").on("click", function () {

        //Show modal
        $('#newUserModal').modal('show');

        //Fetch user, and set to DOM
        SDK.User.getAll(function (err, publishers) {
            if (err) throw err;

            var $usersRadio = $("#usersRadio");
            users.forEach(function (publisher, i) {

                $publishersRadio.append(
                    '<div class="radio">' +
                    '<label>' +
                    '<input type="radio" name="publisherRadios" id="optionsRadios' + i + '" value="' + publisher.id + '">' +
                    publisher.name +
                    '</label>' +
                    '</div>'
                );
            });
        });

        //Create JSON object
        var book = {
            title: $("#bookTitle").val(),
            subtitle: $("#bookSubTitle").val(),
            pageCount: $("#bookPageCount").val(),
            edition: $("#bookEdition").val(),
            price: $("#bookPrice").val(),
            authorIds: [],
            publisherId: $("input[name=publisherRadios]:checked").val()
        };
