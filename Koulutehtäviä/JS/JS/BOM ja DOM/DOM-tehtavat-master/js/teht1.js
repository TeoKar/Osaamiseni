let eNim;
let sNim;
let osoite;
let puh;

document.getElementsByTagName('th')[2].innerHTML = "Puh. Numero";

eNim = prompt('Anna etumini');
document.getElementsByTagName('td')[0].innerHTML = eNim;

sNim = prompt('Anna sukumini');
document.getElementsByTagName('td')[1].innerHTML = sNim;

puh = prompt('Anna puhelinnumero!');
document.getElementsByTagName('td')[2].innerHTML = puh;

osoite = prompt('Anna osoite');
document.getElementsByTagName('td')[3].innerHTML = osoite;
