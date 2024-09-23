// // Event Handling
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
const close = document.querySelectorAll('.close');

// Option 1
// for (let i = 0; i < close.length; i++ ){
//     close[i].addEventListener('click', function(e) {
//         e.target.parentElement.style.display = 'none';
//     });
// }

// Option 2
close.forEach(function(el) {
    el.addEventListener('click', function(e) {
        e.target.parentElement.style.display = 'none';
    })
});