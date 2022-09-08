// # Exercício 3

// Reescreva os códigos do arquivo script.js utilizando o if ternário.

// **Relembrando o if ternário**
// ```jsx
// condição ? expr1 : expr2
// ```

// Onde :

// `condição` é uma expressão que é avaliada como `true` ou `false`.

// `expr1`, `expr2` são xpressões com valores de qualquer tipo.



//código a ser reescrito

const nome = prompt("Insira seu nome")

if(nome === "José"){
	console.log("Oi, Zé!");
} else {
	console.log("Olá, "+nome);
}

let idade = prompt("Insira sua idade")

if(idade >= 18){
	console.log("pode tirar carteira de motorista!");
} else {
	console.log("Ainda não pode tirar carteira de motorista");
}


// Reescreva os códigos do arquivo script.js utilizando o if ternário.

nome === "José" ? console.log("Oi, Zé!") : console.log("Olá, " + nome);

idade >= 18 ? console.log("pode tirar carteira de motorista!") : console.log("Ainda não pode tirar carteira de motorista")




// const idadeDependente = Number(prompt("Qual a idade do dependente?"))

// idadeDependente === 13 ? console.log("A idade do dependente é 13 e já pode ter um cartão.")
// : console.log("Verifique as opções possíveis.")