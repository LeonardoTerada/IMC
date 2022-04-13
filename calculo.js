
function calcule(){

const nome = document.querySelector('#nome').value;
const peso = document.querySelector("#peso").value;
const altura = document.querySelector('#altura').value;
let pesoconvertido = parseFloat(peso)
let alturaconvertido = parseFloat(altura)
let soma = (peso/(alturaconvertido * alturaconvertido)).toFixed(2);
console.log(soma);



 



let resposta = document.querySelector('#mensagem');
resposta.textContent = ('Olá , ' + nome + ' seu IMC é de : ' + soma );
}