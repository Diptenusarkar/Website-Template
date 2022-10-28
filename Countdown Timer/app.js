console.log("countdown console");
const countdownForm = document.getElementById("countdown-form");
const titleBox = document.getElementById("title-box");
const dateBox = document.getElementById("date-box");
const timeBox = document.getElementById("time-box");
const countdown1 = document.getElementById("countdown-before-start");
const countdown2 = document.getElementById("countdown-progress");
const countdown3 = document.getElementById("countdown-complete");
const progressHeading = document.getElementById("heading");
const cdays = document.getElementById("days");
const chours = document.getElementById("hours");
const cmins = document.getElementById("mins");
const csecs = document.getElementById("secs");
const resetButton = document.getElementById("resetButton");
const finishingDate = document.getElementById("finishingDate");
const finishingTime = document.getElementById("finishingTime");
const newButton = document.getElementById("newButton");

function page1_visible() {
    countdown1.hidden = false;
    countdown2.hidden = true;
    countdown3.hidden = true;
}
function page2_visible() {
    countdown1.hidden = true;
    countdown2.hidden = false;
    countdown3.hidden = true;
}
function page3_visible() {
    countdown1.hidden = true;
    countdown2.hidden = true;
    countdown3.hidden = false;
}

var savedData;  // saved in local storage


// date-format to force user to submit a future date
var today = new Date().toISOString();
today = today.split("T")[0];
dateBox.setAttribute("min", today);


var d = new Date();
var h = d.getHours();
var m = d.getMinutes();
var today_time = h + ":" + m;

page1_visible();    // countdown before start :


var countdownTitle, countdownDate, countdownTime, countdownDay,timechange,update;
countdownForm.addEventListener("submit", function (e) {

    e.preventDefault();     // it will prevent the default action of the event (prevent it from submitting the form)

    function timeUpdate() {
        countdownTitle = e.srcElement[0].value;
        countdownDate = e.srcElement[1].value;
        countdownTime = e.srcElement[2].value;

        savedData = {
            title: countdownTitle,
            date: countdownDate,
            time: countdownTime
        }
        localStorage.setItem("countdown", JSON.stringify(savedData));

        progressHeading.textContent = countdownTitle;

        var date = new Date();
        var today = date.getTime(); // we will get time in millisecond since January 1, 1970


        countdownDay = new Date(countdownDate).getTime();

        var timeDifference = countdownDay - today;    // we will get the difference in milliseconds


        // we have to add the extra time from time-box
        var extraHours = countdownTime.split(":")[0];
        var extraMinutes = countdownTime.split(":")[1];
        timeDifference += (extraHours * 60 * 60 * 1000);
        timeDifference += (extraMinutes * 60 * 1000);


        // India GMT/UTC +5:30h 
        timeDifference -= ((5 * 60) + 30) * 60 * 1000;  // so we are subtracting 5hr 30mins
        if (timeDifference < 1000) {
            completeCountdown();
        }


        var temp = timeDifference;
        var days = Math.floor(temp / (24 * 60 * 60 * 1000)); temp = temp % (24 * 60 * 60 * 1000);
        var hours = Math.floor(temp / (60 * 60 * 1000)); temp = temp % (60 * 60 * 1000);
        var minutes = Math.floor(temp / (60 * 1000)); temp = temp % (60 * 1000);
        var seconds = Math.floor(temp / 1000);

        cdays.textContent = days;
        chours.textContent = hours;
        cmins.textContent = minutes;
        csecs.textContent = seconds;

        if (timeDifference > 1000) {
            page2_visible();
        }

    }
    timechange = setInterval(timeUpdate, 1000);
})

resetButton.addEventListener("click", function () {
    clearInterval(timechange);
    clearInterval(update);
    page1_visible();
    localStorage.removeItem("countdown");
})

function completeCountdown() {
    console.log("countdown complete");
    clearInterval(timechange);
    clearInterval(update);
    page3_visible();
    var dd = countdownDate.split("-")[2];
    var mm = countdownDate.split("-")[1];
    var yyyy = countdownDate.split("-")[0];
    finishingDate.textContent = dd + "-" + mm + "-" + yyyy;
    finishingTime.textContent = countdownTime;
    localStorage.removeItem("countdown");
}

newButton.addEventListener("click", function () {
    page1_visible();
})

var restoredLocalData;
function restoreData() {
    if (localStorage.getItem("countdown")) {
        page2_visible();
        restoredLocalData = localStorage.getItem("countdown");
        restoredLocalData = JSON.parse(restoredLocalData);
        countdownTitle = restoredLocalData.title;
        countdownDate = restoredLocalData.date;
        countdownTime = restoredLocalData.time;

        progressHeading.textContent = countdownTitle;

        function newTimeUpdate() {
            var date = new Date();
            var today = date.getTime(); // we will get time in millisecond since January 1, 1970

            countdownDay = new Date(countdownDate).getTime();

            var timeDifference = countdownDay - today;    // we will get the difference in milliseconds


            // we have to add the extra time from time-box
            var extraHours = countdownTime.split(":")[0];
            var extraMinutes = countdownTime.split(":")[1];
            timeDifference += (extraHours * 60 * 60 * 1000);
            timeDifference += (extraMinutes * 60 * 1000);


            // India GMT/UTC +5:30h 
            timeDifference -= ((5 * 60) + 30) * 60 * 1000;  // so we are subtracting 5hr 30mins
            if (timeDifference < 1000) {
                completeCountdown();
                localStorage.removeItem("countdown");
            }


            var temp = timeDifference;
            var days = Math.floor(temp / (24 * 60 * 60 * 1000)); temp = temp % (24 * 60 * 60 * 1000);
            var hours = Math.floor(temp / (60 * 60 * 1000)); temp = temp % (60 * 60 * 1000);
            var minutes = Math.floor(temp / (60 * 1000)); temp = temp % (60 * 1000);
            var seconds = Math.floor(temp / 1000);

            cdays.textContent = days;
            chours.textContent = hours;
            cmins.textContent = minutes;
            csecs.textContent = seconds;
        }
        update = setInterval(newTimeUpdate, 1000);
    }
    else{
        page1_visible();
    }
}
restoreData();