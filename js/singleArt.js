const conteneurArt = document.querySelector("#conteneurArt")
const artDetail = document.querySelector("#artDetail")

const article = JSON.parse(localStorage.getItem("articleSelectionne"))
console.log(article)


const title = document.createElement("h1")
title.textContent = article.title
artDetail.appendChild(title)