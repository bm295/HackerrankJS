// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName;
    // Write your code here
    let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    let date = new Date(dateString);
    
    Date.prototype.getDayName = function () {
        return days[this.getDay()];
    };
    dayName = date.getDayName();
    return dayName;
}
