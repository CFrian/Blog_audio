const message = document.querySelector("#message")
const cardArt = document.querySelector("#cardArt")
const URL = "./data/articles.json"
const URLart = "./article-single.html"
//1. créer une fonction pour charger les articles  
// (récupérer avec try...catch)
//2. fetch pour chercher les articles  
//3. convertir les artilces en json 
//4. créer les balises html en js  
//5. injecter dans les balises html de l'étape 4
//6. injecter les balises dans le html

async function chargerArticles() {
    console.log("Chargement en cours...")

    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error("Error: " + response.status)
            // throw sort du TRy pour aller vers CATCH et pour s'occuper de l'erreur
        }

        const articles = await response.json()
        console.log("articles chargés avec succès")


        articles.forEach(article => {
            const card = document.createElement("div")
            card.classList.add("card")

            // ===========  CRREATION CARTE RECTO =========== 

            const recto = document.createElement("div")
            recto.classList.add("card-recto")

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


            // ===========  INFOS METADONNE ART =========== 
            const metaCardRecto = document.createElement("div")
            metaCardRecto.classList.add("metaCardRecto")

            const category = document.createElement("p")
            category.textContent = "#" + article.category

            const metaDivFav = document.createElement("div")
            metaDivFav.classList.add("metaDivFav")

            const imgFavoriIdle = document.createElement("img")
            imgFavoriIdle.src = ("../assets/icons/plus.svg")
            imgFavoriIdle.classList.add('imgFavoriAnim')

            const imgFavoriOut = document.createElement("img")
            imgFavoriOut.src = ("../assets/icons/check.svg")
            imgFavoriOut.classList.add('imgFavoriOut')

            metaDivFav.addEventListener("click", (e) => {
                e.stopPropagation()
                metaDivFav.classList.toggle("active")
            })

            //==============================================
            // ===========  CRREATION CARTE VERSO =========== 

            const verso = document.createElement("div")
            verso.classList.add("card-verso")

            // ===========  ELEMENTS =========== 
            const summary = document.createElement("p")
            summary.textContent = article.summary

            // ===========  INFOS METADONNE ART =========== 
            const metaCardVerso = document.createElement("div")
            metaCardVerso.classList.add("metaCardVerso")

            const createdAt = document.createElement("p")
            createdAt.textContent = article.createdAt

            const author = document.createElement("p")
            author.textContent = article.author
            author.style.fontWeight = "bold"

            const btnReadArt = document.createElement("button")
            btnReadArt.textContent = "Lire l'article"


            card.appendChild(recto)
            card.appendChild(verso)

            recto.appendChild(readingTimeDIV)
            recto.appendChild(img)
            recto.appendChild(title)
            recto.appendChild(metaCardRecto)

            metaCardRecto.appendChild(category)
            metaCardRecto.appendChild(metaDivFav)

            metaDivFav.appendChild(imgFavoriIdle)
            metaDivFav.appendChild(imgFavoriOut)

            readingTimeDIV.appendChild(readingTime)
            readingTimeDIV.appendChild(imgReadingTime)

            verso.appendChild(summary)
            verso.appendChild(btnReadArt)
            verso.appendChild(metaCardVerso)

            metaCardVerso.appendChild(createdAt)
            metaCardVerso.appendChild(author)


            cardArt.appendChild(card)

            card.addEventListener('click', () => {
                card.classList.toggle("flipped")
            })
            title.addEventListener('click', (event) => {
                event.stopPropagation()
                localStorage.setItem("articleSelectionne", JSON.stringify(article))
                window.location.href = `${URLart}?slug=${article.slug}`
            })
            btnReadArt.addEventListener('click', (event) => {
                event.stopPropagation()
                localStorage.setItem("articleSelectionne", JSON.stringify(article))
                window.location.href = `${URLart}?slug=${article.slug}`
            })

            metaDivFav.addEventListener('click', (e) => {
                e.stopPropagation()
                const isActive = metaDivFav.classList.toggle("AddFav")

                if (isActive) {
                    console.log('Article ajouté dans les favoris')
                } else {
                    console.log('Article retiré des favoris')
                }
            })

        });


    } catch (error) {
        console.error("Une erreur est survenue: " + error.message)
    }
}
chargerArticles()


const getArticle = JSON.parse(localStorage.getItem('articleSelectionne'))
console.log(getArticle)
