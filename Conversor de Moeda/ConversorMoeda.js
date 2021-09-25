function ConverterDolar() {
    var valorElementoDolar = document.getElementById("valorReal");
    var valor = valorElementoDolar.value;
    var valorReal = parseFloat(valor);
  
    var valorElementoDolar = (valor / 5.23).toFixed(2);
  
    var elementoValorConvertidoDolar = document.getElementById(
      "valorConvertidoDolar"
    );
    var valorConvertidoDolar = "O valor em dolar é $ " + valorElementoDolar;
    elementoValorConvertidoDolar.innerHTML = valorConvertidoDolar;
  }
  
  function ConverterEuro() {
    var valorElementoEuro = document.getElementById("valorReal");
    var valor = valorElementoEuro.value;
    var valorReal = parseFloat(valor);
  
    var valorElementoEuro = (valor / 6.19).toFixed(2);
  
    var elementoValorConvertidoEuro = document.getElementById(
      "valorConvertidoEuro"
    );
    var valorConvertidoEuro = "O valor em euro é € " + valorElementoEuro;
    elementoValorConvertidoEuro.innerHTML = valorConvertidoEuro;
  }
  