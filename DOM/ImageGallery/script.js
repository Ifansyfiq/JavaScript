const container = document.querySelector(".container");
const besar = document.querySelector(".besar");
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener("click", function (e) {
  // check yg klik itu apa benda?
  if (e.target.className == "thumb") {
    
    // tukar gambar besar dgn gambar yg di klik
    besar.src = e.target.src;

    // tambah class fade-in-element
    besar.classList.add("fade-in-element");

    // buang class fade-in-element
    setTimeout(function () {
      besar.classList.remove("fade-in-element");
    }, 500);

    // buang highlight gambar previous yg di klik
    thumbs.forEach(function(thumb) {
        thumb.className = 'thumb';
    })

    // highlight gambar yg di klik
    e.target.classList.add('active');
  }
});
