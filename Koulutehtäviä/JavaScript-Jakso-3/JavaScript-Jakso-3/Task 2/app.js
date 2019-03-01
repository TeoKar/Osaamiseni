'use strict';

const lomake = document.querySelector('#gcd');
const numero1 = document.querySelector('#numero1');
const numero2 = document.querySelector('#numero2');

function he(evt){
  evt.preventDefault();
  let numero1On = numero1.value;
  let numero2On = numero2.value;
  alert("GCD On " + gcd(numero1On, numero2On));
}

function gcd(numero1On, numero2On){
  if(numero2On == 0){
    return numero1On;
  }else{
    let jaljelleJaava = numero1On % numero2On;
    return gcd(numero2On, jaljelleJaava);
  }
}



lomake.addEventListener('submit', he);