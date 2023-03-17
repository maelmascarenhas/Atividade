function enviar(){
const username = new String (document.getElementById("username").value);
const idade = parseInt (document.getElementById('idade').value);
const salario = parseFloat (document.getElementById('salario').value);
const genero = new String (document.getElementById('genero').value);
const est = new String (document.getElementById('est').value);

console.log(username);

    if( username.length < 3){
        alert (" Quantidade de caracteres não aceita ")
    }
    else{
        alert(" Bem vindo " + username)
    }
    if(idade > 0 || idade < 150) {
        alert(" Idade Confirmada")
    }
    else{
        alert(" Idade não aceita! ")
    }
    if(salario > 0){
        alert(" Salário Arquivado ")
    }
    else{
        alert(" Insira um número válido!! ")
    }
    if(genero[0] == 'm' || genero[0] == 'f'){
        alert(" Gênero confirmado ")
    }
    else{
        alert(" Insira um caractere válido!!! ")
    }
    if(est[0] == 's' || est[0] == 'c' || est[0] == 'v' || est[0] == 'd'){
        alert(" Estado Civil Confirmado ")
    }
    else{
        alert(" Insira um dos caracteres sujeridos")
    }
}