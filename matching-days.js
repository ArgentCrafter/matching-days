const dateInput1 = document.getElementById("dateInput1");
const dateInput2 = document.getElementById("dateInput2");
var date1;
var date2;

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

dateInput1.onchange = function () {
    var currRed = document.querySelector(".red");
    if (currRed) {
        currRed.classList.remove("red");
    }
    date1 = new Date(dateInput1.value);
    var day = daysOfWeek[date1.getDay()];
    var selectedDay = document.getElementById(day);

    var currGreen = document.querySelector(".green");
    if (currGreen) {
        currGreen.classList.remove("green");
        document.getElementById(daysOfWeek[date2.getDay()]).classList.add("blue");
    }

    if (selectedDay.classList.contains("blue")) {
        selectedDay.classList.remove("blue");
        selectedDay.classList.add("green");
    } else {
        selectedDay.classList.add("red");
    }
}

dateInput2.onchange = function () {
    var currBlue = document.querySelector(".blue");
    if (currBlue) {
        currBlue.classList.remove("blue");
    }
    date2 = new Date(dateInput2.value);
    var day = daysOfWeek[date2.getDay()];
    var selectedDay = document.getElementById(day);

    var currGreen = document.querySelector(".green");
    if (currGreen) {
        currGreen.classList.remove("green");
        document.getElementById(daysOfWeek[date1.getDay()]).classList.add("red");
    }

    if (selectedDay.classList.contains("red")) {
        selectedDay.classList.remove("red");
        selectedDay.classList.add("green");
    } else {
        selectedDay.classList.add("blue");
    }
}