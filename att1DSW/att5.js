function gerenciarEvento(evento) {
    console.log(`Evento: ${evento.nome}`);
    
    if (evento.local && evento.nome === "Semana da Tecnologia") {
        console.log(`Local: ${evento.local}`);
    }
    console.log("");

    const dataBR = evento.data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    console.log(dataBR);
    console.log("");

    console.log(`Participantes: ${evento.participantes.length}`);
    console.log("");

    if (evento.participantes.length === 0) {
        console.log("Nenhum participante cadastrado");
    }

    const temLocal = 'local' in evento;
    if (evento.nome === "Semana da Tecnologia") {
        console.log(`Local cadastrado: ${temLocal}`);
        console.log("");
    }

    console.log("--- Estrutura do Objeto (Chave, Valor e Tipo) ---");
    for (let chave in evento) {
        let valor = evento[chave];
        let tipoDado = typeof valor;
        if (valor instanceof Date) tipoDado = 'Date (object)';
        if (Array.isArray(valor)) tipoDado = 'Array (object)';
        
        console.log(`Chave: [${chave}] | Tipo: ${tipoDado}`);
    }
}


const entrada1_ex5 = {
    nome: "Semana da Tecnologia",
    local: "Auditório",
    data: new Date("2026-08-20T00:00:00"),
    participantes: ["Ana", "Carlos", "Marcos"]
};

const entrada2_ex5 = {
    nome: "Workshop Angular",
    local: "Laboratório 5",
    data: new Date("2026-09-10T00:00:00"),
    participantes: []
};

console.log("======= EXERCÍCIO 5 - ENTRADA 1 =======");
gerenciarEvento(entrada1_ex5);

console.log("\n======= EXERCÍCIO 5 - ENTRADA 2 =======");
gerenciarEvento(entrada2_ex5);