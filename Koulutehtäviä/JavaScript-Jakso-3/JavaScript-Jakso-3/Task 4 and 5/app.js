'use strict';

const form = document.querySelector('#Lotto');
let numbers = [];
let userNumbers = [];
let isUnique = false;
const maxRandomNum = 40;
const minRandomNum = 1;
const header = document.querySelector('#header');
header.innerHTML = 'Valitse 7 eri numeroa ' + minRandomNum + ' ja ' +
    maxRandomNum + ' väliltä ja katso kuinka monta sait oikein!';

const draw = (evt) => {
  evt.preventDefault();
  userNumbers = [];
  numbers.length = 0;
  sortUserNum();
  checkUnique();
  if (isUnique === true) {
    for (let i = 0; i < 7;) {
      let randomNum = Math.floor(Math.random() *
          (maxRandomNum - minRandomNum + 1) + minRandomNum);
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
        i++;
      }
    }

    numbers.sort(function(a, b) {
      return a - b;
    });
    checkHowManySameNum();
  } else {
    alert(
        'Antamasi numerot sisältävät samoja numeroita, ole hyvä ja korjaa vastauksesi');
  }
  //alert(numbers);
};

const sortUserNum = () => {
  userNumbers.push(form.querySelector('input[id="1num"]').value);
  userNumbers.push(form.querySelector('input[id="2num"]').value);
  userNumbers.push(form.querySelector('input[id="3num"]').value);
  userNumbers.push(form.querySelector('input[id="4num"]').value);
  userNumbers.push(form.querySelector('input[id="5num"]').value);
  userNumbers.push(form.querySelector('input[id="6num"]').value);
  userNumbers.push(form.querySelector('input[id="7num"]').value);

  userNumbers.sort(function(a, b) {
    return a - b;
  });
  console.log(userNumbers);
};

const checkUnique = () => {
  let unique = [...new Set(userNumbers)];
  if (unique.length === userNumbers.length) {
    console.log('pass');
    isUnique = true;
  } else {
    isUnique = false;

  }
};

const checkHowManySameNum = () => {
  let numbersInt = numbers.map(String);
  let allNum = userNumbers.concat(numbersInt);
  allNum.sort(function(a, b) {
    return a - b;
  });

  let unique = [...new Set(allNum)];
  console.log(unique);
  let length = unique.length;
  let correct = 14 - length;
  console.log(length);
  console.log(correct);

  if (correct === 1) {
    alert('Sait ' + correct + ' numeron oikein');
  } else {
    alert('Sait ' + correct + ' numeroa oikein');
  }

};

form.addEventListener('submit', draw);