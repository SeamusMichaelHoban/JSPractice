function DateTime() {
    var d = new Date();
    if (d.getDay() == 0) {
        document.getElementById("day").innerHTML = "Sunday";
    } else if (d.getDay() == 1) {
        document.getElementById("day").innerHTML = "Monday";
    } else if (d.getDay() == 2) {
        document.getElementById("day").innerHTML = "Tuesday";
    } else if (d.getDay() == 3) {
        document.getElementById("day").innerHTML = "Wednesday";
    } else if (d.getDay() == 4) {
        document.getElementById("day").innerHTML = "Thursday";
    } else if (d.getDay() == 5) {
        document.getElementById("day").innerHTML = "Friday";
    } else {
        document.getElementById("day").innerHTML = "Saturday";
    }
    if (d.getHours() > 0 && d.getHours < 13) {
        document.getElementById("24Clock").innerHTML = "AM";
    } else document.getElementById("24Clock").innerHTML = "PM";

    document.getElementById("hour").innerHTML = d.getHours();
    document.getElementById("min").innerHTML = d.getMinutes();
    document.getElementById("sec").innerHTML = d.getSeconds();

}
