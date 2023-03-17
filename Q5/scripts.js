function calcularAnos(){
    let paisA = parseInt(document.getElementById("populacaoA").value);
    let paisB = parseInt(document.getElementById("populacaoB").value);


    const taxaA = parseFloat(document.getElementById('percentualA').value);
    const taxaB = parseFloat(document.getElementById('percentualB').value);

    let anosNecessarios = 0;

    while(paisA<=paisB){
        anosNecessarios++;
        paisA += paisA*taxaA;
        paisB += paisB*taxaB;
    }

    alert("Foram necessários " + anosNecessarios + " anos");
    alert("População do pais A: " + paisA.toFixed());
    alert("População do pais B: " + paisB.toFixed());
}



//let paisA = 80000; // valor que pode ser alterado durante o processo
//let paisB = 200000;

//const taxaA = 0.03; // valor fixo durante o processo
//const taxaB = 0.015;

//let anosNecessarios = 0;

//console.log(paisA*taxaA)
//console.log(paisB*taxaB);

//while(paisA<paisB){
//    anosNecessarios++;
//    paisA += paisA*taxaA;
//   paisB += paisB*taxaB;
//}
    //alert("Foram necessários " + anosNecessarios + " anos");
    //alert("População do pais A: " + paisA.toFixed());
    //alert("População do pais B: " + paisB.toFixed());
