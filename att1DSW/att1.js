function gerenciarProduto(produto) {
    produto.preco = Number(produto.preco);
    
    if (isNaN(produto.preco)) {
        console.log("Erro: Preço inválido.");
        return;
    }

    console.log(`Produto: ${produto.nome}`);
    console.log(`Categoria: ${produto.categoria}`);
    
    const precoFormatado = produto.preco % 1 === 0 ? produto.preco : produto.preco.toFixed(2);
    console.log(`Preço: R$ ${precoFormatado}`);
    console.log("");

    if (produto.estoque < 10) {
        console.log("Estoque baixo");
    } else {
        console.log("Estoque adequado");
    }
    console.log("");

    if (produto.nome === "Monitor") {
        console.log(JSON.stringify(Object.keys(produto)));
        console.log("");
    }

    console.log("--- Detalhes Técnicos (typeof) ---");
    for (let propriedade in produto) {
        console.log(`Propriedade: ${propriedade} | Valor: ${produto[propriedade]} | Tipo: ${typeof produto[propriedade]}`);
    }
}


const entrada1_ex1 = {
    nome: "Monitor",
    categoria: "Informática",
    preco: "899.90",
    estoque: 5
};

const entrada2_ex1 = {
    nome: "Cadeira",
    categoria: "Escritório",
    preco: "450",
    estoque: 30
};

console.log("======= EXERCÍCIO 1 - ENTRADA 1 =======");
gerenciarProduto(entrada1_ex1);

console.log("\n======= EXERCÍCIO 1 - ENTRADA 2 =======");
gerenciarProduto(entrada2_ex1);