function gerenciarMatricula(disciplinas) {
    disciplinas.push("Estrutura de Dados"); 
    disciplinas.pop(); 

    const cursaJavaScript = disciplinas.includes("JavaScript");

    for (let i = 0; i < disciplinas.length; i++) {
        let disciplina = disciplinas[i];

        if (disciplina === "") {
            continue;
        }

        console.log(disciplina);

        if (disciplina === "TCC") {
            console.log("\nLaço interrompido");
            break;
        }
    }

    if (!disciplinas.includes("TCC")) {
        console.log(`\nTotal: ${disciplinas.length}\n`);
        if (cursaJavaScript) {
            console.log("Aluno cursa JavaScript");
        }
    }
}


const entrada1_ex2 = ["HTML", "CSS", "JavaScript"];
const entrada2_ex2 = ["Banco de Dados", "", "TCC", "Redes"];

console.log("======= EXERCÍCIO 2 - ENTRADA 1 =======");
gerenciarMatricula(entrada1_ex2);

console.log("\n======= EXERCÍCIO 2 - ENTRADA 2 =======");
gerenciarMatricula(entrada2_ex2);