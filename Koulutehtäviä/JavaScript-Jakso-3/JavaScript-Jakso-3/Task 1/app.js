'use strict';

const lomake = document.querySelector('#BMI');
const pituus = document.querySelector('#pituus');
const paino = document.querySelector('#paino');

function BMI (evt){
  evt.preventDefault();
  let pituusOn = pituus.value;
  let painoOn = paino.value;

  pituusOn = pituusOn/100;
  let BMI = painoOn / pituusOn / pituusOn;
  BMI = BMI.toPrecision(6);
  alert ("Sinun BMI on " + BMI);

}

lomake.addEventListener('submit', BMI);