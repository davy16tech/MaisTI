const filaAtendimento = [];
let proximoNumeroSenha = 1;

function chegarPaciente(nome) {
    const senhaGerada = proximoNumeroSenha;
    proximoNumeroSenha++;

    const novoPaciente = {
        nome: nome,
        senha: senhaGerada
    };

    filaAtendimento.push(novoPaciente);
    console.log(`[CHEGADA] Paciente ${nome} recebeu a senha Nº ${senhaGerada}.`);
}

function chamarProximo() {
    if (filaAtendimento.length === 0) {
        console.log("[AVISO] Não há pacientes na fila de espera.");
        return;
    }

    const pacienteChamado = filaAtendimento.shift();
    console.log(`[CHAMADA] Senha Nº ${pacienteChamado.senha}: Por favor, ${pacienteChamado.nome}, dirija-se ao consultório.`);
}

function exibirFila() {
    console.log("\n--- Estado Atual da Fila ---");
    if (filaAtendimento.length === 0) {
        console.log("Fila vazia.");
    } else {
        filaAtendimento.forEach((p, index) => {
            console.log(`${index + 1}º - ${p.nome} (Senha: ${p.senha})`);
        });
    }
    console.log("----------------------------\n");
}

chegarPaciente("Ana Silva");
chegarPaciente("Carlos Souza");
chegarPaciente("Beatriz Costa");

exibirFila();

chamarProximo();
chamarProximo();

exibirFila();

chegarPaciente("David Reis");
chamarProximo();
chamarProximo();
chamarProximo();