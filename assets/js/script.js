$(document).ready(function () {
    // Global time var
    var now = moment();

    // Show current date at top
    var currentDay = now.format("[Today is] dddd, MMMM Do, YYYY");
    $("#currentDay").text(currentDay);

    // Change background color of time block based on current time
    var currentHour = parseInt(now.format("k"));
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

    // Audit time blocks for color code every 5 minutes
    setInterval(function(){
            auditTimeBlock();
      },600000)

    // Change event description box into editable input field when clicked
    $(".description").click(function () {
        var eventEl = $(this).children();
        var eventText = $("<textarea>").addClass("textarea");
        eventEl.replaceWith(eventText);

        eventText.trigger("focus");
    });

    // Save event and turn description back into p element when save button clicked
    $(".saveBtn").click(function () {
        var eventEl = $(this).prev(".description").children(".textarea");
        var eventText = eventEl.val().trim();
        var eventP = $("<p>").addClass("event").text(eventText);
        eventEl.replaceWith(eventP);

        // Create object to save event info to local storage
        var hourKey = $(this).prev(".description").attr("data-time");

        localStorage.setItem(hourKey, eventText);
    });

    // Load events from local storage
    var loadEvents = function () {
        for (var i = 8; i < 18; i++) {
            var selectEventBlock = $("[data-time=" + i + "]");
            selectEventBlock.children(".event").text(localStorage.getItem(i));
            console.log(selectEventBlock.val);
        }
    };

    loadEvents();
    auditTimeBlock();
});