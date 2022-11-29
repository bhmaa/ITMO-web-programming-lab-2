function validate() {
    let form = document.querySelector('.form');
    let x = form.querySelector('#x').value;
    let y = form.querySelector('#y').value;
    let r = form.querySelector('#r').value;

    const errors = form.querySelectorAll('.text-error');
    for (let i = 0; i < errors.length; i++) {
        errors[i].remove();
    }

    if (y == null || y === "") {
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'please enter value of y';
        document.getElementById('y').after(err);
        return;
    }

    if (isNaN(y.replace(',', '.'))) {
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'y should be a number';
        document.getElementById('y').after(err);
        return;
    }

    if (y < -5 || y > 3) {
        let err = document.createElement('div');
        err.className = 'text-error';
        err.innerHTML = 'y should be in range [-5, 3]';
        document.getElementById('y').after(err);
        return;
    }

    $.ajax({
        url: "ControllerServlet",
        method: "GET",
        dataType: "html",
        data: {
            x: x,
            y: y,
            r: r,
            currentTime: new Date().toLocaleTimeString()
        },
        success: function (data) {
            document.querySelector("#body").innerHTML = data;
        },
        error: function (error) {
            console.log(error);
        },
    });
    $("#y").val("");
}