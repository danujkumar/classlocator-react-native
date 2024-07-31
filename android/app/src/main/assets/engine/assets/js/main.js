/**
 * Template Name: Avilon - v4.8.1
 * Template URL: https://bootstrapmade.com/avilon-bootstrap-landing-page-template/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });
});

// New Page
// Hide all elements with class="containerTab", except for the one that matches the clickable grid column
function openTab() {
  var i, x;
  x = document.getElementsByClassName('containerTab');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  document.getElementById('b1').style.display = 'block';
}

//This alert is not valid, all the floors are working perfectly
function alerty() {
  alert('This Feature Will Be Available After 1-2 Week ! Have Patience...');
}

let grounds1 = document.getElementById('grounds1');
let grounds2 = document.getElementById('grounds2');
let firstt1 = document.getElementById('firstt1');
let firstt2 = document.getElementById('firstt2');
let secondd1 = document.getElementById('secondd1');
let secondd2 = document.getElementById('secondd2');

const removeSess = () => {
  sessionStorage.removeItem('start');
  sessionStorage.removeItem('end');
  sessionStorage.removeItem('Stair');
};
grounds1.onclick = () => {
  removeSess();
  sessionStorage.setItem('map_no', '0');
  sessionStorage.setItem('serviceUse', 'X');
};
firstt1.onclick = () => {
  removeSess();
  sessionStorage.setItem('map_no', '1');
  sessionStorage.setItem('serviceUse', 'X');
};
secondd1.onclick = () => {
  removeSess();
  sessionStorage.setItem('map_no', '2');
  sessionStorage.setItem('serviceUse', 'X');
};
try {
  grounds2.onclick = () => {
    removeSess();
    sessionStorage.setItem('map_no', '0');
    sessionStorage.setItem('serviceUse', 'X');
  };
  firstt2.onclick = () => {
    removeSess();
    sessionStorage.setItem('map_no', '1');
    sessionStorage.setItem('serviceUse', 'X');
  };
  secondd2.onclick = () => {
    removeSess();
    sessionStorage.setItem('map_no', '2');
    sessionStorage.setItem('serviceUse', 'X');
  };
} catch (error) {}

document.getElementById('swap').addEventListener('mouseover', () => {
  document
    .getElementById('swap')
    .querySelector('svg')
    .setAttribute('fill', '#1dc9ce');
});

document.getElementById('swap').addEventListener('mouseout', () => {
  document
    .getElementById('swap')
    .querySelector('svg')
    .setAttribute('fill', 'white');
});
