const drawIt = document.querySelector('#draw');
const ink = document.querySelector('#ink');
const capIt = document.querySelector('#cap');
const div = document.querySelector('#drawarea');
const capon = document.querySelector('#capon');
const inkAmount1 = document.querySelector('#inkamount');

class Pen {
  constructor(inkCapacity) {
    this._inkCapacity = inkCapacity;
    this._capOn = true;
    this._inkAmount = 0;
  }

  capOnOff() {
    if (this._capOn === true) {
      this._capOn = false;
      capon.innerHTML = 'Cap is off';
    } else {
      this._capOn = true;
      capon.innerHTML = 'Cap is on';
    }
  }

  inkAdd() {
    if (this._inkAmount >= this._inkCapacity) {
      inkAmount1.innerHTML = "There is " + this._inkAmount + " ink (Max ink " + maxInk + ")";
      alert('Maximum ink amount!');
    }
    if (this._inkAmount >= 0 && this._inkAmount < this._inkCapacity) {
      this._inkAmount++;
      inkAmount1.innerHTML = "There is " + this._inkAmount + " ink (Max ink " + maxInk + ")";
      console.log(this._inkAmount);
    }
  }

  drawMarker() {
    if (this._inkAmount > 0 && this._capOn === false) {
      this._inkAmount--;
      inkAmount1.innerHTML = "There is " + this._inkAmount + " ink (Max ink " + maxInk + ")";
      const div1 = document.createElement('div');
      let rNum = Math.floor(Math.random() * 3) + 1;
      if (rNum === 1) {
        div1.classList.add('drawings');
        div.append(div1);
      }
      if (rNum === 2) {
        div1.classList.add('drawings1');
        div.append(div1);
      }
      if (rNum === 3) {
        div1.classList.add('drawings2');
        div.append(div1);
      }
    }
    if (this._inkAmount > 0 && this._capOn === true) {
      alert('Before drawing take the cap off!');
    }
    if (this._inkAmount === 0 && this._capOn === false) {
      alert('Before drawing add more ink!');
    }
    if (this._inkAmount === 0 && this._capOn === true) {
      alert('Before drawing take the cap off and add more ink!');
    }
  }
}

let marker = new Pen(10);
let maxInk = 10;
inkAmount1.innerHTML = "There is 0 ink (Max ink " + maxInk + ")";

const draw = (evt) => {
  marker.drawMarker();
};

const addInk = (evt) => {
  marker.inkAdd();
};

const cap = (evt) => {
  marker.capOnOff();
};

drawIt.addEventListener('click', draw);
ink.addEventListener('click', addInk);
capIt.addEventListener('click', cap);