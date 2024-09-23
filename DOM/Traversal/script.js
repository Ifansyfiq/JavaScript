// // Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
// const close = document.querySelectorAll('.close');

// Option 1
// for (let i = 0; i < close.length; i++ ){
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Option 2
// close.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); //prevent default
//         e.stopPropagation(); //event bubbling
//     })
// });


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         alert('ok');
//     })
// })


const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close' ) {
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    }
    else if( e.target.className == 'card' ) {
        alert('ok');
    }
});