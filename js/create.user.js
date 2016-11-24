$(document).ready(function () {

    /**
     * Create a new User
     */
    $("#createUserButton").on("click", function () {

        //Checkboxes
        var mobilapayIsChecked=0;
        if ($("input[name=mobilepay]:checked").val()){
            mobilepayIsChecked=1
        }
        var cashIsChecked=0;
        if ($("input[name=cash]:checked").val()){
            cashIsChecked=1
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
            phonenumber: parseInt($("#newUserPhone").val()),
            address: $("#newUserAddress").val(),

            mobilepay: mobilapayIsChecked,
            cash: cashIsChecked,
            transfer: transferIsChecked,
        };

        //Create user
        SDK.User.create(user, function(err, data){
            if(err) throw err;

            window.location.href="user.html"
        });
    });
});