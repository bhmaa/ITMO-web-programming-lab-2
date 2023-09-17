function drawGraph() {
    const green = '#1EC503';
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.strokeStyle = green;
    context.fillStyle = green;
    context.globalAlpha = 1;
    context.beginPath();
    drawArrow(context, 10, 210, 410, 210);
    drawArrow(context, 210, 410, 210, 10);
    drawDot(110, 210, green);
    drawDot(160, 210, green);
    drawDot(260, 210, green);
    drawDot(310, 210, green);
    drawDot(210, 110, green);
    drawDot(210, 160, green);
    drawDot(210, 260, green);
    drawDot(210, 310, green);
    context.globalAlpha = 0.25;
    context.fillRect(110, 210, 100, 50);
    context.beginPath();
    context.moveTo(110, 210);
    context.lineTo(210, 110);
    context.lineTo(210, 210);
    context.fill();
    context.beginPath();
    context.moveTo(310, 210);
    context.arc(210, 210, 100, 0, Math.PI / 2);
    context.lineTo(210, 210);
    context.fill();
    context.globalAlpha = 1;
    context.font = '18px monospace'
    context.fillText('-R', 110, 210);
    context.fillText('-R/2', 160, 210);
    context.fillText('R', 210, 110);
    context.fillText('R/2', 210, 160);
    context.fillText('R/2', 260, 210);
    context.fillText('R', 310, 210);
    context.fillText('-R/2', 210, 260);
    context.fillText('-R', 210, 310);

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
    drawGraph();
    canvas.addEventListener("click", function (e) {
        const r = document.querySelector('#r').value;
        let offset = $(canvas).offset();
        const x = Math.round((e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
            - Math.floor(offset.left) - 210) / 100 * r);
        const y = ((210 - (e.clientY + document.body.scrollTop + document.documentElement.scrollTop
            - Math.floor(offset.top) + 1)) / 100 * r).toFixed(9);

        if (x >= -3 && x <= 5 && y >= -5 && y <= 3) {
            $('#x').val(x);
            $('#y').val(y);
            $('#hidden-timezone').val(new Date().getTimezoneOffset());
            $('#coordinates').submit();
        } else {
            alert("this dot is out definition. x should be in range [-3, 5], y should be in range [-5, 3]");
        }
    });
});

function clearDots() {
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, 400, 400);
    drawGraph();
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