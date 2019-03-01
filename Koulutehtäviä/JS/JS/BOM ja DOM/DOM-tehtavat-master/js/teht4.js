const kuvat = [
  'http://placekitten.com/321/240',
  'http://placekitten.com/320/241',
  'http://placekitten.com/322/242',
  'http://placekitten.com/321/240',
  'http://placekitten.com/331/240',
];
let i = 0;
const ul = document.querySelector('ul');

for (i = 0; i < 5; i++){
  var li = document.createElement('li');
  ul.appendChild(li);
  li.style = "list-style-type: none;";
  var img = document.createElement('img');
  li.appendChild(img);
  img.src = kuvat[i];
}