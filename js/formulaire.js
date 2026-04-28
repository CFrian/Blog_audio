const formSub = document.querySelector("#formSub")
const pseudo = document.querySelector("#pseudo")
const mail = document.querySelector("#mail")
const password = document.querySelector("#password")
const passwordComparatif = document.querySelector("#passwordComparatif")

formSub.addEventListener("submit", (e) => {
    e.preventDefault()

    const pseudoValue = pseudo.value.trim().toLowerCase()
    const mailValue = mail.value.trim().toLowerCase()
    const passwordValue = password.value.trim()
    const passwordComparatifValue = passwordComparatif.value.trim()

    if (pseudoValue === "" || mailValue === "" || passwordValue === "" || passwordComparatifValue === "") {
        console.log("veuillez remplir les champs")
        return
    }

    if (passwordValue !== passwordComparatifValue) {
        console.log("Les mots de passe ne correspondent pas !")
        return
    }

    console.log("Inscription réussie :", { pseudoValue, mailValue })

    pseudo.value = ""
    mail.value = ""
    password.value = ""
    passwordComparatif.value = ""
})