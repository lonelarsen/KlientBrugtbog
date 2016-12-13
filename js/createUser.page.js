$(document).ready(function () {

    /**
     * Create a new User
     */
    $("#createUserButton").on("click", function () {

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

        //Create JSON object
        var user = {
            username: $("#newUserUsername").val(),
            password: $("#newUserPassword").val(),
            email: $("#newUserEmail").val(),
            phonenumber: parseInt($("#newUserPhonenumber").val()),
            address: $("#newUserAddress").val(),

            mobilepay: mobilepayIsChecked,
            cash: cashIsChecked,
            transfer: transferIsChecked
        };

        //Create user
        SDK.User.create(user, function(err){
            if(err) throw err;
            console.log(user.username);

            window.location.href="user.html"
        });
    });
});