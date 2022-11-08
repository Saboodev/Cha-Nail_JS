(function () {
    [...document.querySelectorAll(".nav")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    })
})();

let allImg = [...document.getElementsByClassName("picture")];
let modalBg = document.getElementById("modal-bg");
let modalImg = document.getElementById("modal-img");

const openModal = (e) => {
    let clickedImageSrc = e.target.src;
    modalBg.classList.add("active");
    modalImg.src = clickedImageSrc;
};

const closeModal = () => {
    modalBg.classList.remove("active");
};

allImg.forEach((el) => el.addEventListener("click", openModal));

modalImg.addEventListener("click", (e) => e.stopPropagation());
modalBg.addEventListener("click", closeModal);
