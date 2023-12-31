function cargarUnidades(categoria) {
    const unidadesLongitud = ["Millas", "Kilómetros", "Metros", "Centímetros", "Pies", "Pulgadas"];
    const unidadesPeso = ["Libras", "Kilogramos", "Gramos", "Onzas"];
    const unidadesTemperatura = ["Grados Celsius", "Grados Fahrenheit", "Kelvin"];
    const unidadesTiempo = ["Segundos", "Minutos", "Horas", "Días", "Años"];
    let unidades;
  
    switch (categoria) {
      case "longitud":
        unidades = unidadesLongitud;
        break;
      case "peso":
        unidades = unidadesPeso;
        break;
      case "temperatura":
        unidades = unidadesTemperatura;
        break;
      case "tiempo":
        unidades = unidadesTiempo;
        break;
      default:
        unidades = [];
    }
  
    const unidadOriginalSelect = document.getElementById("unidadOriginal");
    const unidadConvertirSelect = document.getElementById("unidadConvertir");
    
    unidadOriginalSelect.innerHTML = "";
    unidadConvertirSelect.innerHTML = "";
  
    unidades.forEach(unidad => {
      const optionOriginal = document.createElement("option");
      optionOriginal.value = unidad;
      optionOriginal.innerText = unidad;
      unidadOriginalSelect.appendChild(optionOriginal);
  
      const optionConvertir = document.createElement("option");
      optionConvertir.value = unidad;
      optionConvertir.innerText = unidad;
      unidadConvertirSelect.appendChild(optionConvertir);
    });
  }
  
  function convertir() {
    const valor = parseFloat(document.getElementById("valor").value);
    const categoria = document.getElementById("categoria").value;
    const unidadOriginal = document.getElementById("unidadOriginal").value;
    const unidadConvertir = document.getElementById("unidadConvertir").value;
  
    let resultado = convertirUnidades(categoria, unidadOriginal, unidadConvertir, valor);
  
    document.getElementById("resultado").innerText = `Resultado: ${valor} ${unidadOriginal} es igual a ${resultado} ${unidadConvertir}`;
  }
  
  function convertirUnidades(categoria, unidadOriginal, unidadConvertir, valor) {
    switch (categoria) {
      case "longitud":
        return convertirLongitud(unidadOriginal, unidadConvertir, valor);
      case "peso":
        return convertirPeso(unidadOriginal, unidadConvertir, valor);
      case "temperatura":
        return convertirTemperatura(unidadOriginal, unidadConvertir, valor);
      case "tiempo":
        return convertirTiempo(unidadOriginal, unidadConvertir, valor);
      default:
        return "Categoría no válida";
    }
  }
  
  function convertirLongitud(unidadOriginal, unidadConvertir, valor) {
    const factores = {
      "Millas": 1609.34,
      "Kilómetros": 1,
      "Metros": 1000,
      "Centímetros": 100000,
      "Pies": 3280.84,
      "Pulgadas": 39370.1
    };
  
    return (valor * factores[unidadConvertir]) / factores[unidadOriginal];
  }
  
  
  function convertirPeso(unidadOriginal, unidadConvertir, valor) {
    const factores = {
      "Libras": 453.592,
      "Kilogramos": 1,
      "Gramos": 1/1000,
      "Onzas": 1/35.274
    };
  
    return (valor * factores[unidadOriginal]) / factores[unidadConvertir];
  }
  
  
  function convertirTemperatura(unidadOriginal, unidadConvertir, valor) {
    const factores = {
      "Grados Celsius": {
        "Grados Fahrenheit": (valor * 9/5) + 32,
        "Kelvin": valor + 273.15
      },
      "Grados Fahrenheit": {
        "Grados Celsius": (valor - 32) * 5/9,
        "Kelvin": (valor - 32) * 5/9 + 273.15
      },
      "Kelvin": {
        "Grados Celsius": valor - 273.15,
        "Grados Fahrenheit": (valor - 273.15) * 9/5 + 32
      }
    };
  
    return factores[unidadOriginal][unidadConvertir];
  }
  
  
  function convertirTiempo(unidadOriginal, unidadConvertir, valor) {
    const factores = {
      "Segundos": 1,
      "Minutos": 1 / 60,
      "Horas": 1 / 3600,
      "Días": 1 / 86400,
      "Años": 1 / 31536000
    };
  
    return valor * factores[unidadConvertir] / factores[unidadOriginal];
  }

  document.getElementById("categoria").addEventListener("change", (event) => {
    const categoria = event.target.value;
    cargarUnidades(categoria);
  });

  cargarUnidades("longitud");
  
