// Declare variables that will give you acess to manipulate the DOM

let inputEl = document.querySelector('.enter');
const btnConvertEl = document.querySelector('#convert-btn');
const lengthEl = document.querySelector('.length-cal');
const volumeEl = document.querySelector('.volume-cal');
const massEl = document.querySelector('.mass-cal');

// Add an event to the button to listen for click events

btnConvertEl.addEventListener('click', () => {
  // execute some functions
  lengthEl.innerText = calculateLength();
  volumeEl.innerText = calculateVolume(); 
  massEl.innerText = calculateMass();
})


// function to convert from meters to feet and vice versa
function calculateLength() {
  let feet, meters, result;
  feet = Number(inputEl.value * 3.281).toFixed(3);
  meters = Number(inputEl.value / 3.281).toFixed(3);
  result = `${inputEl.value} meters = ${feet} feet | ${inputEl.value} feet = ${meters} meters`;
  return result;
}

// function to convert from liters to galloon and vice versa
function calculateVolume() {
  let liters, galloons, result;
  galloons = Number(inputEl.value * 0.264).toFixed(3);
  liters = Number(inputEl.value / 0.264).toFixed(3);
  result = `${inputEl.value} liters = ${galloons} galloons | ${inputEl.value} galloons = ${liters} liters`;
  return result
}

// function to convert from kilos to pounds and vice versa
function calculateMass() {
  let kilos, pounds, result;
  pounds = Number(inputEl.value * 2.204).toFixed(3);
  kilos = Number(inputEl.value / 2.204).toFixed(3);
  result = `${inputEl.value} kilos = ${pounds} pounds | ${inputEl.value} pounds = ${kilos} kilos`;
  return result
}