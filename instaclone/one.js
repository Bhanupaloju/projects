let image = document.querySelector('img.img');
image.addEventListener('click', function(e) {
    image.requestFullscreen();
})

image.addEventListener('dblckick', function(e) {
    document.exitFullscreen();
})