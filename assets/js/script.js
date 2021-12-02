var now = moment();
var currentDay = now.format("[Today is] dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDay);
console.log(now);
console.log(currentDay);