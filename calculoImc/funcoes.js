function limpaCampos(){
        document.getElementById("inNome").value="";
        document.getElementById("rbMasculino").checked=false;
        document.getElementById("rbFeminino").checked=false;
        document.getElementById("inAltura").value="";
        document.getElementById("outResposta").textContent="";

        document.getElementById("inNome").focus();
    }

function calculaImc(){
  var altura = document.getElementById("inAltura").value;
  var nome = document.getElementById("inNome").value;
  var peso;

  if(document.getElementById("rbMasculino").checked == true){
    peso = 22 * altura * altura
  }else{
    peso = 21 * altura * altura
  }

  document.getElementById("outResposta").textContent = nome + ", seu peso ideal é: " + peso;

}

var btCalcula =  document.getElementById("btCalcula");
btCalcula.addEventListener("click", calculaImc);