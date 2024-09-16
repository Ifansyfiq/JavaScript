// DOM selection

// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'purple';
judul.style.backgroundColor = 'lightblue';
judul.innerHTML = 'HAYAI';

// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// p[1].style.backgroundColor = 'lightgreen';

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px'; 

// document.getElementsByClassName() -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'INI TELAH BERUBAH';

// document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'red';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'lightblue';
li2.style.color = 'red';

// document.querySelectorAll() -> nodeList
const p = document.querySelectorAll('p');
