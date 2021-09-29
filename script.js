var $currentDay = $("#currentDay");
var $hourBlocks = $(".hour-blocks");
var $workDayScheduler = $(".work-day-scheduler");

var currentHour = moment().format("H");

//open scheduler when nothing is inputted yet--when document loads

//display currentDate

var currentDate = moment().format("dddd MMMM Do YYYY");
$("#time-stamp").text(currentDate);


//input text to text column--save to local storage on click

//add different colors to show past, present and future hours

var dataHour = ".data-hour"

if (dataHour < currentHour) {

    //style it green

} else if

    (dataHour > currentHour) {

    //style it gray
} else {

    //style it red;

}

