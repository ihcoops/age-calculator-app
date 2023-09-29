import { calculate } from "./calculate.js";
import { dayError, monthError, yearError } from "./error-states.js";

const form = document.getElementById("frm");
const day = form.elements[0];
const month = form.elements[1];
const year = form.elements[2];

const today = new Date();
const curDay = today.getDate();
const curMonth = today.getMonth() + 1;
const curYear = today.getFullYear();

const dayErrorText = document.querySelector('.day-error-text');
const monthErrorText = document.querySelector('.month-error-text');
const yearErrorText = document.querySelector('.year-error-text');

let validDay;
let validMonth;
let validYear;
let validDate;

let submittedDay = false;
let submittedMonth = false;
let submittedYear = false;

//months with 30 days
const shortMonths = [4, 6, 9, 11];

day.addEventListener('keyup', () => {
  submittedDay = false;
  checkInput();
});

month.addEventListener('keyup', () => {
  submittedMonth = false;
  checkInput();
});

year.addEventListener('keyup', () => {
  submittedYear = false;
  checkInput();
});

const submitButton = document.querySelector('.js-submit');

submitButton.addEventListener(('click'), () => {
  submittedDay = true;
  submittedMonth = true;
  submittedYear = true;
  checkFilledDay();
  checkFilledMonth();
  checkFilledYear();
  if (day.value && month.value && year.value && validDay && validMonth && validYear && validDate) {
    calculate(curDay, curMonth, curYear, day.value, month.value, year.value);
  }
});


/**
 * Every time a key is pressed this function clears whatever was displayed previously and checks the new input
 */
function checkInput() {
  clearDisplay();
  checkValidDay();
  checkValidMonth();
  checkValidYear();
  checkFilledDay();
  checkFilledMonth();
  checkFilledYear();
  if (validDay && validMonth && validYear && day.value && month.value && year.value) {
    checkValidDate();
  }
}

function checkFilledDay() {
  if (!day.value) {
    if (submittedDay) {
      dayErrorText.innerHTML = "This is a required field";
      dayError(true);
    }
  }
}

function checkFilledMonth() {
  if (!month.value) {
    if (submittedMonth) {
      monthErrorText.innerHTML = "This is a required field";
      monthError(true);
    }
  }
}

function checkFilledYear() {
  if (!year.value) {
    if (submittedYear) {
      yearErrorText.innerHTML = "This is a required field";
      yearError(true);
    }
  }
}


function checkValidDay() {
  if (day.value) {
    let dayInt = parseInt(day.value);
    if (dayInt > 31 || dayInt < 1) {
      validDay = false;
      dayErrorText.innerHTML = 'Must be a valid day';
    }
    else validDay = true;
  }
  else {
    validDay = true;
  }
  dayError(!validDay);
}

function checkValidMonth() {
  if (month.value) {
    let monthInt = parseInt(month.value);
    if (monthInt > 12 || monthInt < 1) {
      validMonth = false;
      monthErrorText.innerHTML = 'Must be a valid month';
    }
    else validMonth = true;
  }
  else {
    validMonth = true;
  }
  monthError(!validMonth);
}

function checkValidYear() {
  if (year.value) {
    let yearInt = parseInt(year.value);
    if (yearInt > 2023 || yearInt < 0) {
      validYear = false;
      yearErrorText.innerHTML = 'Must be in the past';
    }
    else validYear = true;
  }
  else {
    validYear = true;
  }
  yearError(!validYear);
}

function checkValidDate() {
  let yearInt = parseInt(year.value);
  let monthInt = parseInt(month.value);
  let dayInt = parseInt(day.value);

  //leap year februaries
  if (yearInt % 4 === 0 && monthInt === 2 && dayInt > 28) {
    validDate = false;
  }
  //regular february
  else if (monthInt === 2 && dayInt > 29) {
    validDate = false;
  }
  //30 day months
  else if (shortMonths.includes(monthInt) && dayInt > 30) {
    validDate = false;
  }
  //making sure date is in the past
  else if (yearInt === curYear) {
    if (monthInt > curMonth) {
      validDate = false;
    }
    else if (monthInt === curMonth && dayInt > curDay) {
      validDate = false;
    }
    else {
      validDate = true;
    }
  }
  else {
    validDate = true;
  }

  if (validDate) {
    dayErrorText.innerHTML = '';
  }
  else {
    dayErrorText.innerHTML = 'Must be a valid date';
  }
  dayError(!validDate);
  monthError(!validDate);
  yearError(!validDate);
}

function clearDisplay() {
  document.querySelector('.js-day').innerHTML = "--";
  document.querySelector('.js-month').innerHTML = "--";
  document.querySelector('.js-year').innerHTML = "--";
}

