function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}



var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

document.addEventListener("DOMContentLoaded", function () {
    const faqHeaders = document.querySelectorAll(".faq_header");

    faqHeaders.forEach((header) => {
      header.addEventListener("click", function () {
        const faqItem = this.parentElement;
        const answer = this.nextElementSibling;
        const icon = this.querySelector(".faq_icon");
        answer.classList.toggle("show");
        icon.classList.toggle("rotate");
      });
    });
  });
