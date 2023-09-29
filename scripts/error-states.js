export function dayError(boolean) {
  if (boolean) {
    document.querySelector("label[for=day]").classList.add('red');
    document.querySelector("#day").classList.add('red-border');
    document.querySelector("#day").classList.remove('focus-outline');
    document.querySelector("#day").classList.add('no-outline');
  }
  else {
    document.querySelector('.day-error-text').innerHTML = '';
    document.querySelector("label[for=day]").classList.remove('red');
    document.querySelector("#day").classList.remove('red-border');
    document.querySelector("#day").classList.add('focus-outline');
    document.querySelector("#day").classList.remove('no-outline');
  }
}

export function monthError(boolean) {
  if (boolean) {
    document.querySelector("label[for=month]").classList.add('red');
    document.querySelector("#month").classList.add('red-border');
    document.querySelector("#month").classList.remove('focus-outline');
    document.querySelector("#month").classList.add('no-outline');
  }
  else {
    document.querySelector('.month-error-text').innerHTML = '';
    document.querySelector("label[for=month]").classList.remove('red');
    document.querySelector("#month").classList.remove('red-border');
    document.querySelector("#month").classList.add('focus-outline');
    document.querySelector("#month").classList.remove('no-outline');
  }
}

export function yearError(boolean) {
  if (boolean) {
    document.querySelector("label[for=year]").classList.add('red');
    document.querySelector("#year").classList.add('red-border');
    document.querySelector("#year").classList.remove('focus-outline');
    document.querySelector("#year").classList.add('no-outline');
  }
  else {
    document.querySelector('.year-error-text').innerHTML = '';
    document.querySelector("label[for=year]").classList.remove('red');
    document.querySelector("#year").classList.remove('red-border');
    document.querySelector("#year").classList.add('focus-outline');
    document.querySelector("#year").classList.remove('no-outline');
  }
}