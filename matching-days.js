const dateInput1 = document.getElementById("dateInput1");
const dateInput2 = document.getElementById("dateInput2");

let match = matchingDays();

document.body.onload = () => {
    var templateSource = document.querySelector(".template").innerHTML;
    var compTemplate = Handlebars.compile(templateSource);
    var weekDisplayElem = document.querySelector(".weekDisplay");
    var weekDisplayHTML = compTemplate({ weekDays: match.getDaysOfWeek() });
    weekDisplayElem.innerHTML = weekDisplayHTML;
}

dateInput1.onchange = function () {
    if (document.querySelector(".red")) {
        document.querySelector(".red").classList.remove("red");
    }

    match.setDate1(new Date(dateInput1.value));
    var day = match.getArrDays()[match.getDate1().getDay()];
    var selectedDay = document.getElementById(day);

    if (document.querySelector(".green")) {
        document.querySelector(".green").classList.remove("green");
        document.getElementById(match.getArrDays()[match.getDate2().getDay()]).classList.add("blue");
    }

    if (selectedDay.classList.contains("blue")) {
        selectedDay.classList.remove("blue");
        selectedDay.classList.add("green");
    } else {
        selectedDay.classList.add("red");
    }
}

dateInput2.onchange = function () {
    if (document.querySelector(".blue")) {
        document.querySelector(".blue").classList.remove("blue");
    }

    match.setDate2(new Date(dateInput2.value));
    var day = match.getArrDays()[match.getDate2().getDay()];
    var selectedDay = document.getElementById(day);

    if (document.querySelector(".green")) {
        document.querySelector(".green").classList.remove("green");
        document.getElementById(match.getArrDays()[match.getDate1().getDay()]).classList.add("red");
    }

    if (selectedDay.classList.contains("red")) {
        selectedDay.classList.remove("red");
        selectedDay.classList.add("green");
    } else {
        selectedDay.classList.add("blue");
    }
}