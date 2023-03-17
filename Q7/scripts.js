function calcularMaior(){
    let n1 = parseInt(document.getElementById("numero1").value);
    let n2 = parseInt(document.getElementById("numero2").value);
    let n3 = parseInt(document.getElementById("numero3").value);
    let n4 = parseInt(document.getElementById("numero4").value);
    let n5 = parseInt(document.getElementById("numero5").value);

    let maior = n1;

    if(n2>maior){
        maior = n2;
    }
    if(n3>maior){
        maior = n3;
    }
    if(n4>maior){
        maior = n4;
    }
    if(n5>maior){
        maior = n5;
    }

    alert("O maior valor é: "+maior);
}