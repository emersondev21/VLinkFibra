let pedido;
let estado = "nselecionado";

function desselecao(){
  document.getElementById("prime").style.borderColor = "white";
    document.getElementById("plus").style.borderColor = "white";
    document.getElementById("max").style.borderColor = "white";
    document.getElementById("ultra").style.borderColor = "white";
    document.getElementById("mega").style.borderColor = "white";
    document.getElementById("master").style.borderColor = "white";
    estado = "nselecionado";
    pedido = "";
    console.log("estado:"+ pedido + " " + estado);
    console.log("pedido:" + pedido)
}

function pPrime() {
  
  if (estado == "nselecionado"){
    document.getElementById("prime").style.borderColor = "#136497";
    document.getElementById("plus").style.borderColor = "white";
    document.getElementById("max").style.borderColor = "white";
    document.getElementById("ultra").style.borderColor = "white";
    document.getElementById("mega").style.borderColor = "white";
    document.getElementById("master").style.borderColor = "white";
    estado = "selecionado";
    pedido = "PRIME";
    console.log("estado:"+ pedido + " " + estado);
    console.log("pedido:" + pedido)
  }else{
    desselecao();
  }
}

function pPlus() {
  if (estado == "nselecionado"){
    document.getElementById("plus").style.borderColor = "#136497";
    document.getElementById("prime").style.borderColor = "white";
    document.getElementById("max").style.borderColor = "white";
    document.getElementById("ultra").style.borderColor = "white";
    document.getElementById("mega").style.borderColor = "white";
    document.getElementById("master").style.borderColor = "white";
    pedido = "PLUS";
    estado = "selecionado";
    console.log("estado:"+ pedido + " " + estado);
    console.log("pedido:" + pedido)
  }else{
    desselecao();
  }
}

function pMax() {
  if (estado == "nselecionado"){
    document.getElementById("max").style.borderColor = "#136497";
    document.getElementById("prime").style.borderColor = "white";
    document.getElementById("plus").style.borderColor = "white";
    document.getElementById("ultra").style.borderColor = "white";
    document.getElementById("mega").style.borderColor = "white";
    document.getElementById("master").style.borderColor = "white";
    pedido = "MAX";
    estado = "selecionado";
    console.log("estado:"+ pedido + " " + estado);
    console.log("pedido:" + pedido)
  }else{
  desselecao();
}
}

function pUltra() {
  if (estado == "nselecionado"){
    document.getElementById("ultra").style.borderColor = "#136497";
    document.getElementById("prime").style.borderColor = "white";
    document.getElementById("plus").style.borderColor = "white";
    document.getElementById("max").style.borderColor = "white";
    document.getElementById("mega").style.borderColor = "white";
    document.getElementById("master").style.borderColor = "white";
    pedido = "ULTRA";
    estado = "selecionado";
    console.log("estado:"+ pedido + " " + estado);
    console.log("pedido:" + pedido)
  }else{
  desselecao();
  }
}

function pMega() {
  if (estado == "nselecionado"){
  document.getElementById("mega").style.borderColor = "#136497";
  document.getElementById("prime").style.borderColor = "white";
  document.getElementById("plus").style.borderColor = "white";
  document.getElementById("max").style.borderColor = "white";
  document.getElementById("ultra").style.borderColor = "white";
  document.getElementById("master").style.borderColor = "white";
  pedido = "MEGA";
  estado = "selecionado";
  console.log("estado:"+ pedido + "" + estado);
  console.log("pedido:" + pedido)
}else{
  desselecao();
  }
}
function pMaster() {
  if (estado == "nselecionado"){
  document.getElementById("master").style.borderColor = "#136497";
  document.getElementById("prime").style.borderColor = "white";
  document.getElementById("plus").style.borderColor = "white";
  document.getElementById("max").style.borderColor = "white";
  document.getElementById("ultra").style.borderColor = "white";
  document.getElementById("mega").style.borderColor = "white";
  pedido = "MASTER";
  estado = "selecionado";
  console.log("estado:"+ pedido + "" + estado);
  console.log("pedido:" + pedido)
}else{
  desselecao();
  }
}

function solicitarInstalacao() {
  let mensagem;

  mensagem =
    "Olá, gostaria de solicitar a instalação do plano " +
    pedido +
    " da Vlink Fibra!";
  window.open("https://wa.me/+5587981154459?text=" + mensagem);
}

function rede1() {
  window.open("https://www.instagram.com/vlinkprovedor/");
}

function rede2() {
  window.open("https://www.facebook.com/vlinkprovedor/?locale=pt_BR");
}

function park() {
  window.open("http://www.sundownpark.com.br/");
}