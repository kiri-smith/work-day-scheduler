var $currentDay = $("#currentDay");
var currentDate = moment().format("dddd MMMM Do YYYY");
var currentHour = moment().format("H");
var hourNineEl = $('.data-hour-9');
var hourTenEl = $('.data-hour-10');
var hourElevenEl = $('.data-hour-11');
var hourTwelveEl = $('.data-hour-12');
var hourThirteenEl = $('.data-hour-13');
var hourFourteenEl = $('.data-hour-14');
var hourFifteenEl = $('.data-hour-15');
var hourSixteenEl = $('.data-hour-16');
var hourSeventeenEl = $('.data-hour-17');


//open scheduler when nothing is inputted yet--when document loads
//display currentDate

$currentDay.text(currentDate);


//add different colors to show past, present and future hours

//9 o'clock row

if (9 < currentHour) {

    hourNineEl.css({ backgroundColor: "red" });

} else if

    (9 > currentHour) {

    hourNineEl.css({ backgroundColor: "gray" });

} else {

    hourNineEl.css({ backgroundColor: "green" });

}

//10 o'clock row

if (10 < currentHour) {

    hourTenEl.css({ backgroundColor: "red" });

} else if

    (10 > currentHour) {

    hourTenEl.css({ backgroundColor: "gray" });

} else {

    hourTenEl.css({ backgroundColor: "green" });

}

//11 o'clock row

if (11 < currentHour) {

    hourElevenEl.css({ backgroundColor: "green" });

} else if

    (11 > currentHour) {

    hourElevenEl.css({ backgroundColor: "gray" });

} else {

    hourElevenEl.css({ backgroundColor: "red" });

}

//12 o'clock row

if (12 < currentHour) {

    hourTwelveEl.css({ backgroundColor: "green" });

} else if

    (12 > currentHour) {

    hourTwelveEl.css({ backgroundColor: "gray" });

} else {

    hourTwelveEl.css({ backgroundColor: "red" });

}

//1 o'clock row (hour 13)

if (13 < currentHour) {

    hourThirteenEl.css({ backgroundColor: "green" });

} else if

    (13 > currentHour) {

    hourThirteenEl.css({ backgroundColor: "gray" });

} else {

    hourThirteenEl.css({ backgroundColor: "red" });

}

//2 o'clock row (hour 14)

if (14 < currentHour) {

    hourFourteenEl.css({ backgroundColor: "green" });

} else if

    (14 > currentHour) {

    hourFourteenEl.css({ backgroundColor: "gray" });

} else {

    hourFourteenEl.css({ backgroundColor: "red" });

}

//3 o'clock row (hour 15)

if (15 < currentHour) {

    hourFifteenEl.css({ backgroundColor: "green" });

} else if

    (15 > currentHour) {

    hourFifteenEl.css({ backgroundColor: "gray" });

} else {

    hourFifteenEl.css({ backgroundColor: "red" });

}

//4 o'clock row (hour 16)

if (16 < currentHour) {

    hourSixteenEl.css({ backgroundColor: "green" });

} else if

    (16 > currentHour) {

    hourSixteenEl.css({ backgroundColor: "gray" });

} else {

    hourSixteenEl.css({ backgroundColor: "red" });

}

//5 o'clock row (hour 17)

if (17 < currentHour) {

    hourSeventeenEl.css({ backgroundColor: "green" });

} else if

    (17 > currentHour) {

    hourSeventeenEl.css({ backgroundColor: "gray" });

} else {

    hourSeventeenEl.css({ backgroundColor: "red" });

}

//save to local storage when user clicks save button

$(".save-button").on("click", function () {
    var buttonClick = $(this).attr("id");
    var content = $(this).siblings(".text-area").val();

    localStorage.setItem(buttonClick, content);
    localStorage.getItem(content);
})

//retrieve saved input when page is refreshed

$("#text-9").val(localStorage.getItem('save-9'));
$("#text-10").val(localStorage.getItem('save-10'));
$("#text-11").val(localStorage.getItem('save-11'));
$("#text-12").val(localStorage.getItem('save-12'));
$("#text-13").val(localStorage.getItem('save-13'));
$("#text-14").val(localStorage.getItem('save-14'));
$("#text-15").val(localStorage.getItem('save-15'));
$("#text-16").val(localStorage.getItem('save-16'));
$("#text-17").val(localStorage.getItem('save-17'));


