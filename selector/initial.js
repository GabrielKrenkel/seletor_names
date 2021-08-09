let cont = JSON.parse(localStorage.getItem("Contador"))

let contador = cont

if (contador == false) {

    contador = 0

}

if (contador < 2) {
    
    contador++

}

if (contador == 1) {

    let alunos = ["Alanis", "Ana", "Bruno", "Diego", "Eduardo",
    "Gustavo", "João", "Kayo", "Letícia", "Lucas Gabriel", "Luiz C", "Luiz Eduardo",
    "Marcio Kauã", "Marlon", "Michelle", "Sandy", "Vinicius B"]

    localStorage.setItem("Alunos", JSON.stringify(alunos))

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