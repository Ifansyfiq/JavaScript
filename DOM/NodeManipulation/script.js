// DOM Manipulation
// buat element baru
const pBaru = document.createElement('p');
const textPBaru = document.createTextNode('Paragraf Test');

// simpan tulisan dalam elemen baru
pBaru.append(textPBaru);

// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('item Added');
liBaru.appendChild(textLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

// parentNode.insertBefore(newNode, nodeBefore);
ul.insertBefore(liBaru, li2);


// parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

// parentNode.replaceChild()
// ambil position paragraf
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

// buat elemen baru (yg nak tukar)
const h2Baru = document.createElement('h2');
const textH2Baru = document.createTextNode('Tajuk ke 2');
h2Baru.appendChild(textH2Baru);

// ganti elemen
sectionB.replaceChild(h2Baru, p4);