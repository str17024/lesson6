var today = new Date();
var dd = today.getDay()
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();

var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
	
var n = weekday[dd];

if (dd < 10) {
    dd = '0' + dd
} 

if(mm < 10) {
    mm = '0' + mm
} 

today = n + '/' + mm + '/' + yyyy;
document.write(today);
