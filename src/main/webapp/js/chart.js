const center = 210;
const l = 40;

function drawGraph(r) {
    const green = '#1EC503';
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420);
    context.strokeStyle = green;
    context.fillStyle = green;
    context.globalAlpha = 1;
    context.beginPath();
    drawArrow(context, 10, center, 410, center);
    drawArrow(context, center, 410, center, 10);
    context.globalAlpha = 0.25;
    context.fillRect(center - r * l, center, r * l, r * l / 2);

    context.beginPath();
    context.moveTo(center, center);
    context.lineTo(center, center - r * l);
    context.lineTo(center - r * l, center);
    context.closePath();
    context.fill();

    context.beginPath();
    context.moveTo(center + r * l, center);
    context.arc(center, center, r * l, 0, Math.PI / 2);
    context.lineTo(center, center);
    context.closePath();
    context.fill();
    context.globalAlpha = 1;
    context.font = '10px monospace'

    context.fillText('-R', center - r * l, center);
    context.fillText('R', center, center - r * l);
    context.fillText('-R/2', center - r * l / 2, center);
    context.fillText('R/2', center, center - r * l / 2);
    context.fillText('R/2', center + r * l / 2, center);
    context.fillText('R', center + r * l, center);
    context.fillText('-R/2', center, center + r * l / 2);
    context.fillText('-R', center, center + r * l);
}

function drawDot(x, y, color) {
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.fillStyle = color;
    context.globalAlpha = 1;
    context.fillRect(x, y, 3, 3);
}

$(document).ready(function () {
    const canvas = document.getElementById("graphic");
    drawGraph(1);
    canvas.addEventListener("click", function (e) {
        let offset = $(canvas).offset();
        let x = Math.round((e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
            - Math.floor(offset.left) - center) / l);
        if (x > 5) {
            x = 5;
        }
        if (x < -3) {
            x = -3;
        }
        let y = ((center - (e.clientY + document.body.scrollTop + document.documentElement.scrollTop
            - Math.floor(offset.top) + 1)) / l).toFixed(9);
        if (y > 3) {
            y = 3;
        }
        if (y < -5) {
            y = -5;
        }

        $('#x').val(x);
        $('#y').val(y);
        $('#hidden-timezone').val(new Date().getTimezoneOffset());
        $('#coordinates').submit();

    });
});

function clearDots() {
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420);
    drawGraph(document.getElementById('r').value);
}

function drawArrow(context, fromx, fromy, tox, toy) {
    const headlen = 10;
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    context.moveTo(tox, toy);
    context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    context.stroke();
}