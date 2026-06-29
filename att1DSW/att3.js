function formatarMensagemLivro(titulo, autor) {
    return `O livro "${titulo}" foi escrito por ${autor}.`;
}

function gerenciarBiblioteca(autoresString, autorParaBuscar) {
    const autoresArray = autoresString.split(",");

    autoresArray.forEach(autor => console.log(autor));
    console.log("");

    if (autoresArray.includes(autorParaBuscar)) {
        console.log("Autor encontrado");
    } else {
        console.log("Autor não encontrado");
    }
    console.log("");

    const exemploMensagem = formatarMensagemLivro("Dom Casmurro", autoresArray[0]);
    console.log(`[Exemplo Template Literal]: ${exemploMensagem}`);

    console.log(`[Lista com join()]: ${autoresArray.join(" - ")}`);
}


const entrada1_ex3 = "Machado de Assis,Clarice Lispector,Monteiro Lobato";
const entrada2_ex3 = "J. K. Rowling,J. R. R. Tolkien";

console.log("======= EXERCÍCIO 3 - ENTRADA 1 =======");
gerenciarBiblioteca(entrada1_ex3, "Machado de Assis");

console.log("\n======= EXERCÍCIO 3 - ENTRADA 2 =======");
gerenciarBiblioteca(entrada2_ex3, "Machado de Assis"); // Buscando autor que não está na lista