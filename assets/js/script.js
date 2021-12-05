var now = moment();
var eventsArr;

// Show current date at top
var currentDay = now.format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// Change background color of time block based on current time
var currentHour = now.format("k");
// Create array with each event block, check time for each event block
var eventBlock = $(".description");
var auditTimeBlock = function () {
    for (var i = 0; i < eventBlock.length; i++) {
        var eventBlockTime = parseInt(eventBlock[i].dataset.time);
        if (currentHour > eventBlockTime) {
            eventBlock[i].classList.add("past");
        } else if (currentHour === eventBlockTime) {
            eventBlock[i].classList.add("present");
        } else {
            eventBlock[i].classList.add("future");
        }
    };
};

// 
// setInterval(function(){
//     $(".description").each(function(index,el) {
//         auditTimeBlock();
//     });
//   },5000)
auditTimeBlock();

// Change event description box into editable input field when clicked
$(".description").click(function(){
    var eventEl = $(this).children();
    var eventText = $("<textarea>").addClass("textarea");
    eventEl.replaceWith(eventText);

    eventText.trigger("focus");
});

// Save event and turn description back into p element when save button clicked
$(".saveBtn").click(function(){
    var eventEl = $(this).prev(".description").children(".textarea");
    var eventText = eventEl.val().trim();
    var eventP = $("<p>").addClass("event").text(eventText);
    eventEl.replaceWith(eventP);

    eventsArr = JSON.parse(localStorage.getItem("eventData")) || [];

    // Create object to save event info to local storage
    var eventObj = {
        hour: $(this).prev(".description").attr("data-time"), 
        event: eventText
    };
    
    eventsArr.push(eventObj);
    saveEvent();
});

// Load events from local storage
var loadEvents = function () {
    eventsArr = JSON.parse(localStorage.getItem("eventsArr")) || [];
};

// Save event info to local storage
var saveEvent = function(text) {
    localStorage.setItem("eventData", JSON.stringify(eventsArr));
};


loadEvents();

