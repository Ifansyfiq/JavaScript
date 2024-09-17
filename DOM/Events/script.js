// DOM event
const p3 = document.querySelector('.p3');

function tukarWarna() {
    p3.style.backgroundColor = 'lightblue';
}

function tukarWarna2() {
    p2.style.backgroundColor = 'lightgreen';
}

const p2 = document.querySelector('.p2');
p2.onclick = tukarWarna2;

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('New List');
    liBaru.append(teksLiBaru);
    ul.appendChild(liBaru);
});