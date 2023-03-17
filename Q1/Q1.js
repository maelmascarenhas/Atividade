function arquivar() {
var nota = new parseInt(document.getElementById('nota').value);

console.log(nota);

    if (nota >= 10 || nota <= 10) {
        alert("Nota Arquivada!!")
    }
    else{
        alert("Valor de nota não está válido")
    }
}