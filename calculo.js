
function calcule(){


let peso = document.querySelector("#peso").value;
let altura = document.querySelector('#altura').value;
let pesoconvertido = parseFloat(peso)
let alturaconvertido = parseFloat(altura)
let soma = peso/(alturaconvertido * alturaconvertido);
console.log(soma)
}