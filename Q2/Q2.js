function entrar(){
    var nome = new String(document.getElementById("nome").value);
    var senha = new parseInt(document.getElementById("senha").value);

    if(nome == senha){
        alert(" Nome do Usuário igual a senha troque por favor !!! ")
    }
    else{
        alert("Acesso Autorizado")
    }
}
// Digite seu nome de Usuário: //
// Digite sua senha: //