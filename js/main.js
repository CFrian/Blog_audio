const userLoginbtn = document.querySelector("#iconLogIn");
const userLoginPanel = document.querySelector(".userLogIn");
// const displayLogin = document.querySelector(".displayLogin");


userLoginbtn.addEventListener("click", () => {
    userLoginPanel.classList.toggle("open")
})


// retourne la carte d'article
const cardFlip = document.querySelector('.card');
cardFlip.addEventListener('click', function () {
    cardFlip.classList.toggle('flipped');
});
