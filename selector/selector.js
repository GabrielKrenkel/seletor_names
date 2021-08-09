let button = document.querySelector("#sorteador"),
    parag = document.querySelector("#NomeAluno")

function finish() {

        alert("Todos alunos sorteados!!")
        
}

button.onclick = function() {

    const alunos = JSON.parse(localStorage.getItem("Alunos"))
    
    if (alunos.length === 0) {
        
        finish()

        return
    }

    const numeroSorteado = Math.floor(Math.random() * alunos.length);

    let aluno = alunos[numeroSorteado]

    let indice = alunos.indexOf(aluno)

    while (indice >= 0) {
        
        alunos.splice(indice, 1)

        indice = alunos.indexOf(aluno)
    }

    parag.innerHTML = aluno

    console.log(alunos);

    localStorage.setItem("Alunos", JSON.stringify(alunos))

}