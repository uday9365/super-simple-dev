let calculation = localStorage.getItem('calculation') || '';

displayCal(); 

function updateCalculation (value){
  calculation += value;
  displayCal();
}

function saveCalculation() {
  localStorage.setItem('calculation' , calculation)
}

function displayCal() {
  document.querySelector('.display-result')
 .innerHTML = calculation;
}