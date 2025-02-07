let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Increment slide index
    slideIndex++;

    // Reset to first slide if we reach the end
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Call function again after 5 seconds
    setTimeout(showSlides, 5000);
}

// Start the slideshow
document.addEventListener("DOMContentLoaded", showSlides);

