const today = new Date();
const curDay = today.getDate();
const curMonth = today.getMonth() + 1
const curYear = today.getFullYear();

const form = document.getElementById("frm");
const day = form.elements[0];
const month = form.elements[1];
const year = form.elements[2];

let dayBool;
let monthBool;
let yearBool;
let validBool;

let submitted = false;

const dayErrorText = document.querySelector('.day-error-text');
const monthErrorText = document.querySelector('.month-error-text');
const yearErrorText = document.querySelector('.year-error-text');

const shortMonths = [4, 6, 9, 11];

day.addEventListener('keyup', () => {
  checkInput();
  //ADD AN IF SUBMITTED => check to make sure not null blah blah
})

month.addEventListener('keyup', () => {
  checkInput();
})

year.addEventListener('keyup', () => {
  checkInput();
})

function checkInput() {
  if (day.value) {
    if (day.value > 31 || day.value < 1 || day.value % 1 !== 0) {
      dayBool = false;
    }
    else {
      dayBool = true;
    }
    dayError(dayBool);
  }
  else {
    dayError(true);
  }

  if (month.value) {
    if (month.value > 12 || month.value <  1 || month.value % 1 !== 0) {
      monthBool = false;
    }
    else {
      monthBool = true;
    }
    monthError(monthBool);
  }
  else {
    monthError(true);
  }

  if (year.value) {
    if (year.value > curYear || year.value < 0 || year.value % 1 !== 0) {
      yearBool = false;
    }
    else {
      yearBool = true;
    }
    yearError(yearBool);
  }
  else {
    yearError(true);
  }

  if (day.value && dayBool && month.value && monthBool && year.value && yearBool) {
    checkValidDate();
  }
}

function checkValidDate() {
  const yearInt = parseInt(year.value);
  const monthInt = parseInt(month.value);
  const dayInt = parseInt(day.value);

  //leap year februaries
  if (yearInt % 4 === 0 && monthInt === 2 && dayInt > 28) {
    invalidDate(false);
  }
  //regular february
  else if (yearInt % 4 === 0 && monthInt === 2 && dayInt > 29) {
    invalidDate(false);
  }
  //30 day months
  else if (shortMonths.includes(monthInt) && dayInt > 30) {
    invalidDate(false);
  }
  //making sure date is in the past
  else if (yearInt === curYear) {
    if (monthInt > curMonth) {
      invalidDate(false);
    }
    else if (monthInt === curMonth && dayInt > curDay) {
      invalidDate(false);
    }
  }
  else {
    validBool = true;
    invalidDate(true);
  }
}


function dayError(boolean) {
  if (!boolean) {
    dayErrorText.innerHTML = 'must be a valid day';
    document.querySelector("label[for=day]").classList.add('red');
    document.querySelector("#day").classList.add('red-border');
  }
  else {
    dayErrorText.innerHTML = '';
    document.querySelector("label[for=day]").classList.remove('red');
    document.querySelector("#day").classList.remove('red-border');
  }
}

function monthError(boolean) {
  if (!boolean) {
    monthErrorText.innerHTML = 'must be a valid month';
    document.querySelector("label[for=month]").classList.add('red');
    document.querySelector("#month").classList.add('red-border');
  }
  else {
    monthErrorText.innerHTML = '';
    document.querySelector("label[for=month]").classList.remove('red');
    document.querySelector("#month").classList.remove('red-border');
  }
}

function yearError(boolean) {
  if (!boolean) {
    yearErrorText.innerHTML = 'must be a valid year';
    document.querySelector("label[for=year]").classList.add('red');
    document.querySelector("#year").classList.add('red-border');
  }
  else {
    yearErrorText.innerHTML = '';
    document.querySelector("label[for=year]").classList.remove('red');
    document.querySelector("#year").classList.remove('red-border');
  }
}

function invalidDate(boolean) {
  monthErrorText.innerHTML = '';
  yearErrorText.innerHTML = '';
  if (!boolean) {
    dayErrorText.innerHTML = 'invalid date';
    document.querySelector("label[for=day]").classList.add('red');
    document.querySelector("#day").classList.add('red-border');
    document.querySelector("label[for=month]").classList.add('red');
    document.querySelector("#month").classList.add('red-border');
    document.querySelector("label[for=year]").classList.add('red');
    document.querySelector("#year").classList.add('red-border');
  }
  else {
    dayErrorText.innerHTML = '';
    document.querySelector("label[for=day]").classList.remove('red');
    document.querySelector("#day").classList.remove('red-border');
    document.querySelector("label[for=month]").classList.remove('red');
    document.querySelector("#month").classList.remove('red-border');
    document.querySelector("label[for=year]").classList.remove('red');
    document.querySelector("#year").classList.remove('red-border');
  }
}

function calculate() {
  console.log('2');
  let dayCarry = false;
  let dayDif = curDay - day.value;
  if (dayDif < 0) {
    dayCarry = true;
    dayDif += 31;
  }
  let monthDif = curMonth - month.value;
  let yearDif;
  if (monthDif >= 0) {
    yearDif = curYear - year.value;
  }
  else {
    yearDif = curYear - year.value - 1;
    monthDif += 12;
  }
  if (dayCarry) {
    monthDif--;
  }

  document.querySelector('.js-year').innerHTML = yearDif;
  document.querySelector('.js-month').innerHTML = monthDif;
  document.querySelector('.js-day').innerHTML = dayDif;
}



const submitButton = document.querySelector('.js-submit');

submitButton.addEventListener(('click'), () => {
  if (dayBool && monthBool && yearBool && validBool && day.value && month.value && year.value) {
    console.log('1');
    calculate();
  }
});

