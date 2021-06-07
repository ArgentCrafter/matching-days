const dateInput1 = document.getElementById("dateInput1");
const dateInput2 = document.getElementById("dateInput2");
var date1;
var date2;
const arrDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]

document.body.onload = () => {
    var templateSource = document.querySelector(".template").innerHTML;
    var compTemplate = Handlebars.compile(templateSource);
    var weekDisplayElem = document.querySelector(".weekDisplay");
    var daysOfWeek = [{day : "Sunday"}, {day : "Monday"}, {day : "Tuesday"}, {day : "Wednesday"}, {day : "Thursday"}, {day : "Friday"}, {day : "Saturday"}];
    var weekDisplayHTML = compTemplate({weekDays : daysOfWeek});
    weekDisplayElem.innerHTML = weekDisplayHTML;
}

dateInput1.onchange = function () {
    if (document.querySelector(".red")) {
        document.querySelector(".red").classList.remove("red");}

    date1 = new Date(dateInput1.value);
    var day = arrDays[date1.getDay()];
    var selectedDay = document.getElementById(day);

    if (document.querySelector(".green")) {
        document.querySelector(".green").classList.remove("green");
        document.getElementById(arrDays[date2.getDay()]).classList.add("blue");}

    if (selectedDay.classList.contains("blue")) {
        selectedDay.classList.remove("blue");
        selectedDay.classList.add("green");
    } else {
        selectedDay.classList.add("red");}
}

dateInput2.onchange = function () {
    if (document.querySelector(".blue")) {
        document.querySelector(".blue").classList.remove("blue");}

    date2 = new Date(dateInput2.value);
    var day = arrDays[date2.getDay()];
    var selectedDay = document.getElementById(day);

    if (document.querySelector(".green")) {
        document.querySelector(".green").classList.remove("green");
        document.getElementById(arrDays[date1.getDay()]).classList.add("red");}

    if (selectedDay.classList.contains("red")) {
        selectedDay.classList.remove("red");
        selectedDay.classList.add("green");
    } else {
        selectedDay.classList.add("blue"); }
}