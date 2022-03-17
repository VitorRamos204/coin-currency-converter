function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5.01
    var valorEmBTC = valorEmDolarNumerico * 0.000024
    var btcFinal = parseFloat(valorEmBTC);
    console.log(btcFinal)
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$: " + valorEmReal.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
    
    var elementoBTC = document.getElementById("valorConvertidoEmBTC")
    var emBTC = "Em BTC: " + btcFinal.toFixed(6)
    elementoBTC.innerHTML = emBTC
  }
  
  function ConverterEmEuro() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmEuroNumerico = parseFloat(valor);
  
    var valorEmEuro = valorEmEuroNumerico * 5.53
    var valorEmBTC = valorEmEuroNumerico * 0.000027
    var btcFinal = parseFloat(valorEmBTC);
    console.log(btcFinal)
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$: " + valorEmEuro.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
    
    var elementoBTC = document.getElementById("valorConvertidoEmBTC")
    var emBTC = "Em BTC: " + btcFinal.toFixed(6)
    elementoBTC.innerHTML = emBTC
  }
  
  function ConverterEmLibra() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmLibraNumerico = parseFloat(valor);
  
    var valorEmLibra = valorEmLibraNumerico * 6.59
    var valorEmBTC = valorEmLibraNumerico * 0.000024
    var btcFinal = parseFloat(valorEmBTC);
    console.log(btcFinal)
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor em real é R$: " + valorEmLibra.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
    
    var elementoBTC = document.getElementById("valorConvertidoEmBTC")
    var emBTC = "Em BTC: " + btcFinal.toFixed(6)
    elementoBTC.innerHTML = emBTC
  }