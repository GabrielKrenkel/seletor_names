const alunos = ["Alanis", "Ana", "Bruno", "Diego", "Eduardo",
"Gustavo", "João", "Kayo", "Letícia", "Lucas Gabriel", "Luiz C", "Luiz Eduardo",
"Marcio Kauã", "Marlon", "Michelle", "Sandy", "Vinicius B"];

 

const numeroSorteado = Math.floor(Math.random() * alunos.length);

console.log(alunos[numeroSorteado]);

console.log(alunos);

function excluirName() {
    
    let aluno = alunos.splice(" ")


    JSON.stringify(aluno)
}