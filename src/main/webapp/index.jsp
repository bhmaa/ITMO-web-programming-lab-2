<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="table" class="bhma.weblab2.beans.ResultTable" scope="session"/>
<!DOCTYPE html>
<html>
<head>
    <title>web lab №2</title>
    <link href="css/style.css" rel="stylesheet">
    <link href="css/form_style.css" rel="stylesheet">
    <link rel="icon" href="img/favicon.png">
</head>
<body>
<div class="container">
    <div class="header">
        <h1>student: starikova daria</h1>
        <h2>group: p3231</h2>
        <h2>var: 3231210</h2>
    </div>
    <div class="graph">
        <canvas id="graphic" width="420px" height="420px"></canvas>
    </div>
    <div class="form">
        <form action="controller" method="get" id="coordinates">
            <div class="x-select">
                <label for="x">select x</label><br>
                <select id="x" class="select" name="x">
                    <option value="-3">-3</option>
                    <option value="-2">-2</option>
                    <option value="-1">-1</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div class="y-text">
                <label for="y" id="y-label">enter y</label><br>
                <input id="y" maxlength="12" placeholder="-5...3" type="text" name="y"/>
            </div>
            <div class="r-select">
                <label for="r">select r</label><br>
                <select id="r" class="select" name="r">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <input id="hidden-timezone" type="hidden" name="timezone" value="">
            <div class="button-wrap" id="submit-wrap">
                <button type="submit" id="submit-button">check</button>
            </div>
        </form>
        <div class="button-wrap" id="clear-wrap">
            <button type="button" id="clear-button">clear</button>
        </div>
    </div>
    <div class="results-holder">
        <table class="results">
            <thead>
            <tr>
                <th>x value</th>
                <th>y value</th>
                <th>r value</th>
                <th>result</th>
                <th>current time</th>
                <th>execution time (ns)</th>
            </tr>
            </thead>
            <tbody id="body">
            <c:forEach var="row" items="${table.results}">
                <tr>
                    <td>${row.x}</td>
                    <td>${row.y}</td>
                    <td>${row.r}</td>
                    <td>${row.hitResult}</td>
                    <td>${row.currentTime}</td>
                    <td>${row.executionTime}</td>
                </tr>
            </c:forEach>
            </tbody>
        </table>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.2/jquery.validate.min.js"></script>
<script src="//cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script>
<script src="js/validator.js"></script>
<script src="js/reset.js"></script>
<script src="js/chart.js"></script>
<script>
    $(document).ready(function () {
        drawDots(1);
        $('#r').on('change', function () {
            drawGraph(document.getElementById('r').value);
            drawDots(document.getElementById('r').value);
        });
    });

    function drawDots(r) {
        <c:forEach var="row" items="${table.results}">
        drawDot(210 + ${row.x} / ${row.r} * r * 40, 210 - ${row.y} / ${row.r} * r * 40, '#ccffcc');
        </c:forEach>
    }
</script>
</body>
</html>