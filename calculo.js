
function calcule(){

const nome = document.querySelector('#nome').value;
const peso = document.querySelector("#peso").value;
const altura = document.querySelector('#altura').value;
let pesoconvertido = parseFloat(peso)
let alturaconvertido = parseFloat(altura)
let soma = (peso/(alturaconvertido * alturaconvertido)).toFixed(2);
let teste ;
if(soma < 18.5){
    let teste = ' abaixo do peso ';
    let resposta = document.querySelector('#mensagem');
resposta.textContent = ('Olá , ' + nome + ' seu IMC é de : ' + soma + teste );
}else if(soma >= 18.5,soma < 24.9){
    let teste = ' peso normal ';
    let resposta = document.querySelector('#mensagem');
resposta.textContent = ('Olá , ' + nome + ' seu IMC é de : ' + soma + teste );

}
else if (soma >= 24.9, soma < 30.00){
    let teste = ' acima do peso ';
    let resposta = document.querySelector('#mensagem');
resposta.textContent = ('Olá , ' + nome + ' seu IMC é de : ' + soma + teste );
}
else if(soma >= 30.00, soma <40.00){
    let teste = ' obesidade ';
    let resposta = document.querySelector('#mensagem');
resposta.textContent = ('Olá , ' + nome + ' seu IMC é de : ' + soma + teste );

}
else if ( soma>=40.0 ){
    let teste = ' obesidade grave'
    let resposta = document.querySelector('#mensagem');
resposta.textContent = ('Olá , ' + nome + ' seu IMC é de : ' + soma + teste );
}
 


}