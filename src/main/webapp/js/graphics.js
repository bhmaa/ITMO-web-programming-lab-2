function drawGraph() {
    const green = '#1EC503';
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.strokeStyle = green;
    context.fillStyle = green;
    context.globalAlpha = 1;
    context.beginPath();
    drawArrow(context, 0, 200, 400, 200);
    drawArrow(context, 200, 400, 200, 0);
    drawDot(100, 200, green);
    drawDot(150, 200, green);
    drawDot(250, 200, green);
    drawDot(300, 200, green);
    drawDot(200, 100, green);
    drawDot(200, 150, green);
    drawDot(200, 250, green);
    drawDot(200, 300, green);
    context.globalAlpha = 0.25;
    context.fillRect(100, 200, 100, 50);
    context.beginPath();
    context.moveTo(100, 200);
    context.lineTo(200, 100);
    context.lineTo(200, 200);
    context.fill();
    context.beginPath();
    context.moveTo(300, 200);
    context.arc(200, 200, 100, 0, Math.PI/2);
    context.lineTo(200, 200);
    context.fill();
    context.globalAlpha = 1;
    context.font = '18px monospace'
    context.fillText('-R', 100, 200);
    context.fillText('-R/2', 150, 200);
    context.fillText('R', 200, 100);
    context.fillText('R/2', 200, 150);
    context.fillText('R/2', 250, 200);
    context.fillText('R', 300, 200);
    context.fillText('-R/2', 200, 250);
    context.fillText('-R', 200, 300);

}

function drawDot(x, y, color) {
    const canvas = document.getElementById("graphic");
    const context = canvas.getContext('2d');
    context.fillStyle = color;
    context.globalAlpha = 1;
    context.fillRect(x, y, 3, 3);
}

$(document).ready(function () {
    drawGraph();
    const canvas = document.getElementById("graphic");
    canvas.addEventListener("click", function (e) {
        const r = document.querySelector('#r').value;
        let offset = $(canvas).offset();
        const x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft - Math.floor(offset.left);
        const y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - Math.floor(offset.top) + 1;
        $.ajax({
            url: "ControllerServlet",
            method: "GET",
            dataType: "html",
            data: {
                x: (x - 200) / 100 * r,
                y: (200 - y) / 100 * r,
                r: r,
                currentTime: new Date().toLocaleTimeString()
            },
            success: function (data) {
                drawDot(x, y, '#FFFFFF');
                document.querySelector("#body").innerHTML = data;
            },
            error: function (error) {
                console.log(error);
            },
        });
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