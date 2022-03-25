function insert(num){
    var numero = document.getElementById('lblResultado').innerHTML
    document.getElementById('lblResultado').innerHTML = numero + num

}
function calcular(){
    var resultado = document.getElementById('lblResultado').innerHTML
    document.getElementById('lblResultado').innerHTML = eval(resultado)
    document.getElementById('lblConta').innerHTML = resultado

}

function limpar(){
    document.getElementById('lblResultado').innerHTML = ""
    document.getElementById('lblConta').innerHTML = ""
}