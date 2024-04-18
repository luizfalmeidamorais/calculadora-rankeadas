/*
    # Desafio 02: Calculadora de Partidas Rankeadas

    ## O que deve ser utilizado:
    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões
    - Funções

    ## Objetivo
    - Crie uma função que recebe como parâmetro a quantidade de
    vitórias e derrotas de um jogador, depois disso retorne o
    resultado para uma variável, o saldo de Rankeadas deve ser
    feito através do cálculo (vitórias - derrotas).
        - Se vitórias for menor do que 10 = Ferro
        - Se vitórias for entre 11 e 20 = Bronze
        - Se vitórias for entre 21 e 50 = Prata
        - Se vitórias for entre 51 e 80 = Ouro
        - Se vitórias for entre 81 e 90 = Diamante
        - Se vitórias for entre 91 e 100 = Lendário
        - Se vitórias for maior do que 101 = Imortal

    ## Saída
    - Ao final deve se exibir uma mensagem:
        - "O herói tem saldo de [SALDO_VITORIAS] está no nível de [NÍVEL]!"
*/

// Resolução do desafio

function calcularRankeadas(vitorias: number, derrotas: number): string {
	const saldo = vitorias - derrotas;
	let nivel = "";

	if (vitorias <= 10) {
		nivel = "Ferro";
	} else if (vitorias >= 11 && vitorias <= 20) {
		nivel = "Bronze";
	} else if (vitorias >= 21 && vitorias <= 50) {
		nivel = "Prata";
	} else if (vitorias >= 51 && vitorias <= 80) {
		nivel = "Ouro";
	} else if (vitorias >= 81 && vitorias <= 90) {
		nivel = "Diamante";
	} else if (vitorias >= 91 && vitorias <= 100) {
		nivel = "Lendário";
	} else {
		nivel = "Imortal";
	}

	return `O herói tem saldo de ${saldo} está no nível de ${nivel}!`;
}

console.log(calcularRankeadas(100, 20)); // O herói tem saldo de 80 está no nível de Lendário!
