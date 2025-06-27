document.addEventListener("DOMContentLoaded", function () {
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let index = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth + 30; // Adjusted width calculation

    function moveSlide(direction) {
        if (direction === "next") {
            if (index < totalSlides - 1) {
                index++;
            } else {
                index = 0; // Loop back to the first slide
            }
        } else {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - 1; // Loop back to the last slide
            }
        }
        sliderTrack.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // Event listeners for navigation buttons
    nextBtn.addEventListener("click", () => moveSlide("next"));
    prevBtn.addEventListener("click", () => moveSlide("prev"));

    // Enable keyboard navigation (Left Arrow ←, Right Arrow →)
    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") moveSlide("next");
        if (event.key === "ArrowLeft") moveSlide("prev");
    });

    // Swipe support for mobile users
    let touchStartX = 0;
    let touchEndX = 0;

    sliderTrack.addEventListener("touchstart", (event) => {
        touchStartX = event.touches[0].clientX;
    });

    sliderTrack.addEventListener("touchend", (event) => {
        touchEndX = event.changedTouches[0].clientX;
        if (touchEndX < touchStartX) {
            moveSlide("next"); // Swipe left
        } else if (touchEndX > touchStartX) {
            moveSlide("prev"); // Swipe right
        }
    });
});
