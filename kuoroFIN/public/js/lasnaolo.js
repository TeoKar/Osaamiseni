'use strict';
const nappi = document.querySelector('.loginForm');
/*

const dokumenttiValmis = (evtLasna) => {
  console.log('Tapahtuuko tämä????');
  evtLasna.preventDefault();

//kommentin lähetys tietokantaan
  fetch('./lasnaoloPreload').then((response) => {
    return response.json();
  }).then((json) => {
    console.log(json);
    alkutulostus(json);
    console.log('vanhat valmis');
  });

};

*/
const lahetaHaku = (evtHaku) => {
  evtHaku.preventDefault();
  const loginForm = document.querySelector('input[id="haku"]').value;
  localStorage.setItem('haku', loginForm);
  window.location.replace('HTTPS://10.114.32.171/node/uploadhaku.html');
};

//document.addEventListener('DOMContentLoaded', dokumenttiValmis);
nappi.addEventListener('submit', lahetaHaku);