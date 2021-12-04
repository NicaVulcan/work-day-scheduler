var now = moment();

// Show current date at top
var currentDay = now.format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);

// Change background color of time block based on current time
var currentHour = now.format("k");
// Create array with each event block
var eventBlock = $(".description");
var auditTimeBlock = function () {
    for (var i = 0; i < eventBlock.length; i++) {
        var eventBlockTime = eventBlock[i].dataset.time;
        if (currentHour > eventBlockTime) {
            eventBlock[i].classList.add("past");
        } else if (currentHour === eventBlockTime) {
            eventBlock[i].classList.add("present");
        } else {
            eventBlock[i].classList.add("future");
        }
    };
};

// setInterval(function(){
//     $(".description").each(function(index,el) {
//       auditTask(el);
//     });
//   },1800000)

auditTimeBlock();

// Change event description box into editable input field when clicked
$(".description").click(function(){
    var eventEl = $(this).children();
    var eventText = $("<textarea>").addClass("textarea");
    console.log(eventEl);
    console.log(eventText);
    eventEl.replaceWith(eventText);

    eventText.trigger("focus");
});



// $(".list-group").on("blur", "textarea", function () {
//     var text = $(this)
//         .val()
//         .trim();

//     var status = $(this)
//         .closest(".list-group")
//         .attr("id")
//         .replace("list-", "");

//     var index = $(this)
//         .closest(".list-group-item")
//         .index();

//     tasks[status][index].text = text;
//     saveTasks();

//     var taskP = $("<p>")
//         .addClass("m-1")
//         .text(text);

//     $(this).replaceWith(taskP);
// });