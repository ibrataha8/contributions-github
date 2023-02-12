const DAYS_OF_WEEK = 8; //i
const MONTHS = 10; //j
const WEEKS_IN_MONTHS = 4; //k
const cont = document.querySelector(".cont");
const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  // "Nov",
  // "Dec",
];
const WEEKS_NAMES = ["","Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
let row = "";
let l = 0;
// Loop over days
for (let i = 0; i < DAYS_OF_WEEK; i++) {
  if (i == 0) {
    for (var j = 0; j < MONTHS; j++) {
      let month = MONTH_NAMES[l++];
      row += "<div class='month-name'>"+"&nbsp;".repeat(MONTHS-i) + month  + "</div>";
    }
  } else {
    row += "<div class='row'>";
    // Loop over month
    let month = WEEKS_NAMES[i];
    row += "<div class='day-name'>" + month + "</div>";
    for (var j = 0; j < MONTHS; j++) {
      // Loop over each day
      for (let k = 0; k < WEEKS_IN_MONTHS; k++) {
        row += "<span class='square' >&nbsp;&nbsp;&nbsp;&nbsp;</span>";
      }
    }
    row += "</div>";
  }
}
console.log(row);
cont.innerHTML = row;
