const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

let currentIndex = 0;

// deschidere lightbox
images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        lightbox.classList.add("active");
    });
});

function showImage() {
    lightboxImg.src = images[currentIndex].src;
}

// închidere
function closeLightbox() {
    lightbox.classList.remove("active");
}

closeBtn.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

//  controale din tastatură
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") {
        closeLightbox();
    }

    if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showImage();
    }

    if (e.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage();
    }
});
