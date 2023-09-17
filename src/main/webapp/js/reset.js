$(document).ready(function () {
    $("#clear-button").click(function () {
        $.ajax({
            url: "controller",
            method: "GET",
            dataType: "html",
            data: {
                action: "clear"
            },
            success: function () {
                $("#body").html("");
                clearDots();
            },
            error: function (error) {
                console.log(error);
            },
        });
    });
});