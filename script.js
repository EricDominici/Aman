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
  
    // Realizar la conversión según la categoría y unidades seleccionadas
    let resultado = convertirUnidades(categoria, unidadOriginal, unidadConvertir, valor);
  
    // Mostrar el resultado
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
      "Millas": 0.000621371,
      "Kilómetros": 0.001,
      "Metros": 1,
      "Centímetros": 100,
      "Pies": 3.28084,
      "Pulgadas": 39.3701
    };
    return valor * factores[unidadOriginal] / factores[unidadConvertir];
  }
  
  function convertirPeso(unidadOriginal, unidadConvertir, valor) {
    const factores = {
      "Libras": 2.20462,
      "Kilogramos": 1,
      "Gramos": 1000,
      "Onzas": 35.274
    };
    return valor * factores[unidadOriginal] / factores[unidadConvertir];
  }
  
  function convertirTemperatura(unidadOriginal, unidadConvertir, valor) {
    // Implementa la conversión de temperatura (por ejemplo, de Celsius a Fahrenheit y viceversa)
    if (unidadOriginal === "Grados Celsius" && unidadConvertir === "Grados Fahrenheit") {
      return (valor * 9/5) + 32;
    } else if (unidadOriginal === "Grados Fahrenheit" && unidadConvertir === "Grados Celsius") {
      return (valor - 32) * 5/9;
    } else {
      return valor; // Sin conversión
    }
  }
  
  function convertirTiempo(unidadOriginal, unidadConvertir, valor) {
    const factores = {
      "Segundos": 1,
      "Minutos": 1 / 60,
      "Horas": 1 / 3600,
      "Días": 1 / 86400,
      "Años": 1 / 31536000
    };
  
    // El factor de conversión es el inverso de la relación entre las unidades
    return valor * factores[unidadConvertir] / factores[unidadOriginal];
  }
  
  document.getElementById("categoria").addEventListener("change", (event) => {
    const categoria = event.target.value;
    cargarUnidades(categoria);
  });
  
  // Cargar las unidades iniciales
  cargarUnidades("longitud");
  