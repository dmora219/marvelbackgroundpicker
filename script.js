let thor = document.getElementById('thor');
let spiderman = document.getElementById('spiderman');
let hulk = document.getElementById('hulk');
let ironman = document.getElementById('ironman');
let panther = document.getElementById('panther');
let strange = document.getElementById('strange');

thor.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./thor.png)'
})

spiderman.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./spiderman.jpg)'
})

hulk.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./hulk.jpg)'
})

ironman.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./ironman.jpg)'
   document.querySelector('body').style.backgroundSize = 'cover';
})

panther.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(./panther.jpg)'
})

strange.addEventListener('click', function () {
   document.querySelector('body').style.backgroundImage = 'url(strange.jpg)'
   document.querySelector('body').style.backgroundSize = '600px';
})


