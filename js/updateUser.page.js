$(document).ready(function () {

    /**
     * Update a User
     */
    $("#updateUserButton").on("click", function () {

        //Checkboxes
        var mobilepayIsChecked=0;
        if ($("input[name=mobilepay]:checked").val()){
            mobilepayIsChecked=1
        }
        var cashIsChecked=0;
        if ($("input[name=cash]:checked").val()) {
            cashIsChecked = 1
        }
        var transferIsChecked=0;
        if ($("input[name=transfer]:checked").val()){
            transferIsChecked=1
        }

        //Update JSON object
        var user = {
            username: $("#updateUserUsername").val(),
            password: $("#updateUserPassword").val(),
            email: $("#updateUserEmail").val(),
            phonenumber: parseInt($("#updateUserPhonenumber").val()),
            address: $("#updateUserAddress").val(),

            mobilepay: mobilepayIsChecked,
            cash: cashIsChecked,
            transfer: transferIsChecked,
        };

        //Update user
        SDK.User.update(user, function(err){
            if(err) throw err;

            window.location.href="user.html"
        });
    });

    $("#logOutLink").on("click", function () {
        SDK.logOut();
        window.location.href = "index.html";
    });
});