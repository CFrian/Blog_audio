async function loadHeader() {

    try {
        const response = await fetch('./header.html')
        if (!response.ok) {
            throw new Error('Error....')
        }
        const html = await response.text()
        document.querySelector("header").innerHTML = html

        // ========  gestion du panel de connexion ======= 
        const userLoginbtn = document.querySelector("#iconLogIn")
        const userLoginPanel = document.querySelector(".userLogIn")
        const userConnexion = document.querySelector("#userConnexionBtn")
        const userID = document.querySelector("#userID")
        const userMail = document.querySelector("#userPassword")

        userLoginbtn.addEventListener("click", () => {
            userLoginPanel.classList.toggle("open")
        })
        document.addEventListener("click", (e) => {
            const clickDansPannel = userLoginPanel.contains(e.target)
            const clickSurBtn = userLoginbtn.contains(e.target)
            if (!clickDansPannel && !clickSurBtn) {
                userLoginPanel.classList.remove("open")
            }
        })

        userConnexion.addEventListener("click", () => {
            const id = userID.value.trim()
            const password = userPassword.value.trim()

            if (id === "" || password === "") {
                console.log("Champs vides !")
                return
            }

            console.log("Données récupérées :", { id, password })

            // reset des champs
            userID.value = ""
            userMail.value = ""
        })

    } catch (error) {
        console.log(error)
    }
}


async function loadFooter() {
    try {
        const response = await fetch('./footer.html')
        if (!response.ok) {
            throw new Error('Error....')
        }
        const html = await response.text()
        document.querySelector("footer").innerHTML = html
    } catch (error) {
        console.log(error)
    }
}
loadHeader()  // démarre mais n'est pas fini !
loadFooter()  // démarre   

// La subtilité est que si l'on ajoute du code a la
// suite il sera instancié immédiatement sans garantit que
// les résultats du fetch sont effectifs donc erreur ! 



