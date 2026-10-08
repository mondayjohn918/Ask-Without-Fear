const images = document.querySelectorAll(".welcome-images img");

let currentImage = 0;

function changeImage() {

    images[currentImage].style.opacity = "0";

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    images[currentImage].style.opacity = "1";
}

setInterval(changeImage, 3000);