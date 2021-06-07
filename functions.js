function matchingDays() {
    var date1;
    var date2;
    const arrDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
    const daysOfWeek = [{ day: "Sunday" }, { day: "Monday" }, { day: "Tuesday" }, { day: "Wednesday" }, { day: "Thursday" }, { day: "Friday" }, { day: "Saturday" }];

    function getDate1() {
        return date1;
    }

    function setDate1(input) {
        date1 = input ;
    }

    function getDate2() {
        return date2;
    }

    function setDate2(input) {
        date2 = input;
    }

    function getArrDays () {
        return arrDays;
    }

    function getDaysOfWeek () {
        return daysOfWeek;
    }

    return {
        date1,
        date2,
        arrDays,
        daysOfWeek,
        getDate1,
        setDate1,
        getDate2,
        setDate2,
        getArrDays,
        getDaysOfWeek
    }
}