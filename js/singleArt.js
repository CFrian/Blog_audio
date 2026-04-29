const conteneurArt = document.querySelector("#conteneurArt")
const params = new URLSearchParams(window.location.search)
const slug = params.get("slug")
const URL = "./data/articles.json"

async function afficherArticle() {
    console.log("chargement de l'article")

    try {
        const response = await fetch(URL)
        if (!response.ok) {
            throw new Error("Error" + response.status)
        }

        const articles = await response.json()
        console.log("article affiché avec succès")

        const article = articles.find(a => a.slug === slug)

        const title = document.createElement("h1")
        title.textContent = article.title

        const hr = document.createElement("hr")
        hr.classList.add("hr")

        // ===========  INFOS METADONNE ART =========== 
        const metaDiv = document.createElement("div")
        metaDiv.classList.add("metaCard")

        // const imgFavori = document.createElement("img")
        // imgFavori.src = ("../assets/icons/plus.svg")

        const createdAt = document.createElement("p")
        createdAt.textContent = article.createdAt

        const category = document.createElement("p")
        category.textContent = article.category
        category.textContent = "#" + article.category

        const author = document.createElement("p")
        author.textContent = article.author
        author.style.fontWeight = "bold"

        // ===========  ELEMENTS =========== 
        const bodyArt = document.createElement("div")
        bodyArt.classList.add('bodyArt')


        const img = document.createElement("img")
        img.src = article.image
        img.alt = `image de l'arcticle ${title}`
        img.classList.add("card-image")

        const summary = document.createElement("p")
        summary.textContent = article.summary
        summary.classList.add('summary')

        const content = document.createElement("p")
        content.textContent = article.content


        conteneurArt.appendChild(title)
        conteneurArt.appendChild(hr)
        conteneurArt.appendChild(metaDiv)
        conteneurArt.appendChild(bodyArt)

        // metaDiv.appendChild(imgFavori)
        metaDiv.appendChild(createdAt)
        metaDiv.appendChild(category)
        metaDiv.appendChild(author)

        bodyArt.appendChild(img)
        bodyArt.appendChild(summary)
        bodyArt.appendChild(content)


    } catch (Error) {
        console.log("Une erreur est survenue lors du chargement de l'article " + Error.message)
    }
}
afficherArticle()

console.log(slug)



