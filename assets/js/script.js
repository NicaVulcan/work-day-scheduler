var now = moment();

// Show current date at top
var currentDay = now.format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// Change background color of time block based on current time
var currentHour = now.format("k");
// Create array with each event block
var eventBlock = document.querySelectorAll(".description");
var auditTimeBlock = function () {
    for (var i = 0; i < eventBlock.length; i++) {
        var eventBlockTime = eventBlock[i].dataset.time;     
        if(currentHour > eventBlockTime) {
            eventBlock[i].classList.add("past");
            console.log("this is past. it is " + eventBlockTime);
        } else if(currentHour === eventBlockTime) {
            eventBlock[i].classList.add("present");
            console.log("this is present. it is " + eventBlockTime);
        } else {
            eventBlock[i].classList.add("future");
            console.log("this is future. it is " + eventBlockTime);
        }
    };
}

// setInterval(function(){
//     $(".description").each(function(index,el) {
//       auditTask(el);
//     });
//   },1800000)

auditTimeBlock();

// Change event description box into editable input field when clicked




