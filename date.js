// date generator with weekday, month, and day format
// export the return value "day" to app.js by using node.js
module.exports.getDate = getDate;

function getDate(){
let today = new Date();
let options = {
  weekday: "long",
  month: "long",
  day: "numeric",
};

let day = today.toLocaleDateString("eng-US", options);
// function needs the output to be the variable day
return day;
};

// date generator with day only format
// export the return value "day" to app.js by using node.js

module.exports.getWeekDay = getWeekDay;
function getWeekDay(){
let today = new Date();
let options = {
    weekday: "long",
};

let day = today.toLocaleDateString("eng-US", options);
// function needs the output to be the variable day
return day;
};
