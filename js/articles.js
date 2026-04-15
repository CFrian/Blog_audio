const message = document.querySelector("#message")
const cardArt = document.querySelector("#cardArt")

//1. créer une fonction pour charger les articles  
// (récupérer avec try...catch)
//2. fetch pour chercher les articles  
//3. convertir les artilces en json 
//4. créer les balises html en js  
//5. injecter dans les balises html de l'étape 4
//6. injecter les balises dans le html
//7. déclencher le chargement avec le bouton en utilisant addEventListener

async function chargerArticles() {
    console.log("Chargement en cours...")

    try {
        const response = await fetch("../data/articles.json")
        if (!response.ok) {
            throw new Error("Error: " + response.status)
        }

        const articles = await response.json()
        console.log("articles chargés avec succès")


        articles.forEach(article => {
            const card = document.createElement("div")
            card.classList.add("card")
            // ===========  ELEMENTS =========== 
            const title = document.createElement("h3")
            title.textContent = article.title

            const img = document.createElement("img")
            img.src = article.image
            img.alt = `image de l'arcticle ${title}`
            img.classList.add("card-image")
            // ===========  READING TIME =========== 
            const readingTimeDIV = document.createElement("div")
            readingTimeDIV.classList.add("readingTimeDIV")

            const readingTime = document.createElement("p")
            readingTime.textContent = article.readingTime
            const imgReadingTime = document.createElement("img")
            imgReadingTime.src = ("../assets/icons/readTime.svg")


            const summary = document.createElement("p")
            summary.textContent = article.summary
            // ===========  INFOS METADONNE ART =========== 
            const metaCard = document.createElement("div")
            metaCard.classList.add("metaCard")

            const createdAt = document.createElement("p")
            createdAt.textContent = article.createdAt

            const category = document.createElement("p")
            category.textContent = article.category

            const author = document.createElement("p")
            author.textContent = article.author

            card.appendChild(readingTimeDIV)
            card.appendChild(img)
            card.appendChild(title)
            card.appendChild(summary)
            card.appendChild(metaCard)

            metaCard.appendChild(createdAt)
            metaCard.appendChild(category)
            metaCard.appendChild(author)

            readingTimeDIV.appendChild(readingTime)
            readingTimeDIV.appendChild(imgReadingTime)


            cardArt.appendChild(card)

            card.addEventListener('click', () => {
                localStorage.setItem("articleSelectionne", JSON.stringify(article))
                window.location.href = "../article-single.html"
            })

        });


    } catch (error) {
        console.error("Une erreur est survenue: " + error.message)
    }
}
chargerArticles()


const getArticle = JSON.parse(localStorage.getItem('articleSelectionne'))
console.log(getArticle)
