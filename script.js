var $currentDay = $("#currentDay");
var $hourBlocks = $(".hour-blocks");
var $workDayScheduler = $(".work-day-scheduler");
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

    hourNineEl.css({ backgroundColor: "green" });

} else if

    (9 > currentHour) {

    hourNineEl.css({ backgroundColor: "gray" });

} else {

    hourNineEl.css({ backgroundColor: "red" });

}

//10 o'clock row

if (10 < currentHour) {

    hourTenEl.css({ backgroundColor: "green" });

} else if

    (10 > currentHour) {

    hourTenEl.css({ backgroundColor: "gray" });

} else {

    hourTenEl.css({ backgroundColor: "red" });

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

//input text to text column--save to local storage on click
//inputted in textarea row -- do i add a new id for each row?

var hourNineText = document.querySelector("#text-9");
var hourNineSave = document.querySelector("#save-9");
var savedNine = document.querySelector("#text-9");
var hourNineTextEl = $("#text-9");

hourNineSave.addEventListener("click", saveNine);

savedNine.textContent = localStorage.getItem("content");
hourNineText.value = localStorage.getItem("content");

function saveNine() {
    localStorage.setItem("content", hourNineText.value);

    hourNineTextEl.text(hourNineText.value);
}

//works by itself but when i use a similar strategy below--everything duplicates???

var hourTenText = document.querySelector("#text-10");
var hourTenSave = document.querySelector("#save-10");
var savedTen = document.querySelector("#text-10");
var hourTenTextEl = $("#text-10");

/*hourTenSave.addEventListener("click", saveTen);

savedTen.textContent = localStorage.getItem("content");
hourTenText.value = localStorage.getItem("content");

function saveTen() {
    localStorage.setItem("content", hourTenText.value);

    hourTenTextEl.text(hourTenText.value);
}*/


var hourElevenText = document.querySelector("#text-11");
var hourElevenSave = document.querySelector("#save-11");

var hourTwelveText = document.querySelector("#text-12");
var hourTwelveSave = document.querySelector("#save-12");

var hourThirteenText = document.querySelector("#text-13");
var hourThirteenSave = document.querySelector("#save-13");

var hourFourteenText = document.querySelector("#text-14");
var hourFourteenSave = document.querySelector("#save-14");

var hourFifteenText = document.querySelector("#text-15");
var hourFifteenSave = document.querySelector("#save-15");

var hourSixteenText = document.querySelector("#text-16");
var hourSixteenSave = document.querySelector("#save-16");

var hourSeventeenText = document.querySelector("#text-17");
var hourSeventeenSave = document.querySelector("#save-17");


