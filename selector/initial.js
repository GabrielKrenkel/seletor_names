let cont = JSON.parse(localStorage.getItem("Contador"))

let contador = cont

if (contador == false) {

    contador = 0

}

if (contador == 0) {

    let alunos = ["Alanis", "Diego", "Eduardo",
    "Gustavo", "João", "Kayo", "Letícia", "Lucas Gabriel", "Luiz C", "Luiz Eduardo",
    "Marcio Kauã", "Michelle", "Sandy"]

    localStorage.setItem("Alunos", JSON.stringify(alunos))

    contador++
}

localStorage.setItem("Contador", JSON.stringify(contador))


async function imageCat() {
    
    let response = await  fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=munc`, {
        headers: {
            "x-api-key": "ABC123"
        }
    })

    let body = await response.json()

    console.log(body[0].url);

    let corpo = document.querySelector("body")

    corpo.style.backgroundImage = `url(${body[0].url})`
}

imageCat()