function calcularGastos(gastosLista) {
    let total = 0;

    for (let i = 0; i < gastosLista.length; i++) {
        let valorConvertido = Number(gastosLista[i]);

        // Ignorar valores inválidos (NaN)
        if (!isNaN(valorConvertido)) {
            total += valorConvertido;
        }
    }

    return total;
}

function processarFinanceiro(gastos) {
    const totalGasto = calcularGastos(gastos);
    
    const totalFormatado = totalGasto % 1 === 0 ? totalGasto : totalGasto.toFixed(2);
    console.log(`Total: R$ ${totalFormatado}`);
    console.log("");

    if (totalGasto > 2000) {
        console.log("Limite ultrapassado");
    } else {
        console.log("Gastos dentro do limite");
    }
}


const entrada1_ex4 = ["500", "350.50", "1000"];
const entrada2_ex4 = ["800", "900", "700"];

console.log("======= EXERCÍCIO 4 - ENTRADA 1 =======");
processarFinanceiro(entrada1_ex4);

console.log("\n======= EXERCÍCIO 4 - ENTRADA 2 =======");
processarFinanceiro(entrada2_ex4);