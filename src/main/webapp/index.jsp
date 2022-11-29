<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<jsp:useBean id="table" class="bhma.weblab2.beans.ResultTable" scope="session" />
<!DOCTYPE html>
<html>
<head>
    <title>web lab 2</title>
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
<div class="container">
    <div class="header">
        <h1 class="info">starikova daria, group p32312, var. 3231210</h1>
    </div>
    <div class="graph">
        <canvas id="graphic" width="400px" height="400px"></canvas>
    </div>
    <div class="form" id="form">
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
            <label for="y">enter y</label><br>
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
        <div class="buttons">
            <button type="submit" id="submit-button" class="button" onclick="validate()">check</button>
            <button type="button" id="clear-button" class="button">clear</button>
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
                <th>execution time (ms)</th>
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
<script src="js/validation.js"></script>
<script src="js/clear.js"></script>
<script src="js/graphics.js"></script>
</body>
</html>