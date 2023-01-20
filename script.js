let thor = document.getElementById('thor'); //gets all the ids for future use in the event listener
let hulk = document.getElementById('hulk');
let spiderman = document.getElementById('spiderman');
let ironman = document.getElementById('ironman');
let panther = document.getElementById('panther');
let strange = document.getElementById('strange');

thor.addEventListener('click', function () { //adds an event listener that listens for a click and does a function
   document.querySelector('body').style.backgroundImage = 'url(./thor.png)'; //grabs the body and puts a style in the background image and changes it to url location
})
hulk.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./hulk.jpg)'
   document.querySelector('body').style.backgroundSize = 'cover';// changes the size to cover so it fits the background
})
spiderman.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./spiderman.jpg)'
   document.querySelector('body').style.backgroundSize = 'cover';
})
ironman.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./ironman.jpg)'
   document.querySelector('body').style.backgroundSize = 'cover';
})
panther.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./panther.jpg)'
   document.querySelector('body').style.backgroundSize = 'cover';
})
strange.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./strange.jpg)'
   document.querySelector('body').style.backgroundSize = 'cover';
})










/*const elements = [
  {id: 'thor', url: './thor.png'},
  {id: 'spiderman', url: './spiderman.jpg'},
  {id: 'hulk', url: './hulk.jpg'},
  {id: 'ironman', url: './ironman.jpg'},
  {id: 'panther', url: './panther.jpg'},
  {id: 'strange', url: './strange2.jpg'}
];

for (const element of elements) {
   const elem = document.getElementById(element.id);
   elem.addEventListener('click', function() {
     document.querySelector('body').style.backgroundImage = `url(${element.url})`;
     document.querySelector('body').style.backgroundSize = 'cover';
     
   });
 }
*/