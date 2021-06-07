describe("Matching Days", () => {
    describe("Day of week detection", () => {
        it("Input is June 10 2021, output should be Thursday", () => {
            var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            function getWeekDay(){
                var date = new Date("Jun 10 2021");
                return daysOfWeek[date.getDay()];
            }
            assert.equal(getWeekDay(), "Thursday");
        })
        it("input is June 11 2021, output should be Friday", () => {
            var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            function getWeekDay(){
                var date = new Date("Jun 11 2021");
                return daysOfWeek[date.getDay()];
            }
            assert.equal(getWeekDay(), "Friday");
        })
    })
})