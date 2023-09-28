export function calculate(curDay, curMonth, curYear, dayVal, monthVal, yearVal) {
  let dayCarry = false;
  let dayDif = curDay - dayVal;
  if (dayDif < 0) {
    dayCarry = true;
    dayDif += 31;
  }
  let monthDif = curMonth - monthVal;
  let yearDif;
  if (monthDif >= 0) {
    yearDif = curYear - yearVal;
  }
  else {
    yearDif = curYear - yearVal - 1;
    monthDif += 12;
  }
  if (dayCarry) {
    monthDif--;
  }

  let run = setInterval(function () { display(parseInt(yearDif), parseInt(monthDif), parseInt(dayDif), run); }, 50);
}

function display(finalYear, finalMonth, finalDay, run) {
  let dayVal = parseInt(document.querySelector('.js-day').innerHTML);
  if (!dayVal) dayVal = 0;
  let monthVal = parseInt(document.querySelector('.js-month').innerHTML);
  if (!monthVal) monthVal = 0;
  let yearVal = parseInt(document.querySelector('.js-year').innerHTML);
  if (!yearVal) yearVal = 0;
  if (dayVal < finalDay) {
    dayVal++;
    document.querySelector('.js-day').innerHTML = dayVal;
  }
  if (monthVal < finalMonth) {
    monthVal++;
    document.querySelector('.js-month').innerHTML = monthVal;
  }
  if (yearVal < finalYear) {
    yearVal++;
    document.querySelector('.js-year').innerHTML = yearVal;
  }
  if (dayVal === finalDay && monthVal === finalMonth && yearVal === finalYear) {
    clearInterval(run);
    console.log("hello");
  }
}