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


/*   $('#submit-button').click(function (event) {
       event.preventDefault();

       let y = $('#y').value;
       document.querySelector('.error').remove();

       if (y == null || y === "") {
           let err = document.createElement('div');
           err.className = 'error';
           err.innerHTML = 'this field must be filled';
           document.getElementById('y-label').after(err);
           return false;
       }

       if (isNaN(y.replace(',', '.'))) {
           let err = document.createElement('div');
           err.className = 'error';
           err.innerHTML = 'y must be a number';
           document.getElementById('y-label').after(err);
           return false;
       }

       if (y < -5) {
           let err = document.createElement('div');
           err.className = 'error';
           err.innerHTML = 'y must be greater than -5';
           document.getElementById('y-label').after(err);
           return false;
       }

       if (y > 3) {
           let err = document.createElement('div');
           err.className = 'error';
           err.innerHTML = 'y must be less than 3';
           document.getElementById('y-label').after(err);
           return false;
       }

       $('.hidden-timezone').val(new Date().getTimezoneOffset());
       $('#coordinates').submit();
   });
}); */