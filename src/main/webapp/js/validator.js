$(document).ready(function () {
    $("#coordinates").validate({
        rules: {
            y: {
                required: true,
                number: true,
                min: -5,
                max: 3
            },
        },
        messages: {
            y: {
                required: "this field must be filled",
                number: "y must be a number",
                min: "y must be greater than -5",
                max: "y must be less than 3"
            }
        }
    });

    $('#submit-button').click(function () {
        $('#hidden-timezone').val(new Date().getTimezoneOffset());
    });
});