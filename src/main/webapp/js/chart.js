function drawGraph(r) {
    const green = '#1EC503';
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 420, 420);
    context.strokeStyle = green;
    context.fillStyle = green;
    context.globalAlpha = 1;
    context.beginPath();
    drawArrow(context, 10, 160, 410, 160);
    drawArrow(context, 160, 410, 160, 10);
    context.globalAlpha = 0.25;
    if (r > 3) {
        context.fillRect(10, 160, 150, r * 25);
    } else {
        context.fillRect(160 - r * 50, 160, r * 50, r * 25);
    }
    if (r <= 3) {
        context.beginPath();
        context.moveTo(160, 160);
        context.lineTo(160, 160 - r * 50);
        context.lineTo(160 - r * 50, 160);
        context.closePath();
        context.fill();
    } else {
        context.beginPath();
        context.moveTo(160, 160);
        context.lineTo(160, 10);
        context.lineTo(160 + (3 - r) * 50, 10);
        context.lineTo(10, 160 - (r - 3) * 50);
        context.lineTo(10, 160);
        context.lineTo(160, 160);
        context.closePath();
        context.fill();
    }
    context.beginPath();
    context.moveTo(160 + r * 50, 160);
    context.arc(160, 160, r * 50, 0, Math.PI / 2);
    context.lineTo(160, 160);
    context.closePath();
    context.fill();
    context.globalAlpha = 1;
    context.font = '10px monospace'
    if (r <= 3) {
        context.fillText('-R', 160 - r * 50, 160);
        context.fillText('R', 160, 160 - r * 50);
    }
    context.fillText('-R/2', 160 - r * 25, 160);
    context.fillText('R/2', 160, 160 - r * 25);
    context.fillText('R/2', 160 + r * 25, 160);
    context.fillText('R', 160 + r * 50, 160);
    context.fillText('-R/2', 160, 160 + r * 25);
    context.fillText('-R', 160, 160 + r * 50);
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
        const x = Math.round((e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
            - Math.floor(offset.left) - 160) / 50);
        const y = ((160 - (e.clientY + document.body.scrollTop + document.documentElement.scrollTop
            - Math.floor(offset.top) + 1)) / 50).toFixed(9);

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