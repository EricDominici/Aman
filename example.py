def cargar_unidades(categoria):
    unidades_longitud = ["Millas", "Kilómetros", "Metros", "Centímetros", "Pies", "Pulgadas"]
    unidades_peso = ["Libras", "Kilogramos", "Gramos", "Onzas"]
    unidades_temperatura = ["Grados Celsius", "Grados Fahrenheit", "Kelvin"]
    unidades_tiempo = ["Segundos", "Minutos", "Horas", "Días", "Años"]

    if categoria == "longitud":
        unidades = unidades_longitud
    elif categoria == "peso":
        unidades = unidades_peso
    elif categoria == "temperatura":
        unidades = unidades_temperatura
    elif categoria == "tiempo":
        unidades = unidades_tiempo
    else:
        unidades = []

    unidad_original_select = input("Selecciona la unidad original: ")
    unidad_convertir_select = input("Selecciona la unidad a la cual deseas convertir: ")

    for unidad in unidades:
        print(unidad)

    if unidad_original_select not in unidades or unidad_convertir_select not in unidades:
        print("Unidades no válidas para la categoría.")
    else:
        valor = float(input("Ingresa el valor a convertir: "))
        resultado = convertir_unidades(categoria, unidad_original_select, unidad_convertir_select, valor)
        print(f"Resultado: {valor} {unidad_original_select} es igual a {resultado} {unidad_convertir_select}")


def convertir_unidades(categoria, unidad_original, unidad_convertir, valor):
    if categoria == "longitud":
        return convertir_longitud(unidad_original, unidad_convertir, valor)
    elif categoria == "peso":
        return convertir_peso(unidad_original, unidad_convertir, valor)
    elif categoria == "temperatura":
        return convertir_temperatura(unidad_original, unidad_convertir, valor)
    elif categoria == "tiempo":
        return convertir_tiempo(unidad_original, unidad_convertir, valor)
    else:
        return "Categoría no válida"


def convertir_longitud(unidad_original, unidad_convertir, valor):
    factores = {
        "Millas": 1609.34,
        "Kilómetros": 1,
        "Metros": 1000,
        "Centímetros": 100000,
        "Pies": 3280.84,
        "Pulgadas": 39370.1
    }

    return (valor * factores[unidad_convertir]) / factores[unidad_original]
def convertir_peso(unidad_original, unidad_convertir, valor):
    factores = {
        "Libras": 453.592,
        "Kilogramos": 1,
        "Gramos": 1/1000,
        "Onzas": 1/35.274
    }

    return (valor * factores[unidad_original]) / factores[unidad_convertir]
def convertir_temperatura(unidad_original, unidad_convertir, valor):
    factores = {
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
    }

    return factores[unidad_original][unidad_convertir]


def convertir_tiempo(unidad_original, unidad_convertir, valor):
    factores = {
        "Segundos": 1,
        "Minutos": 1/60,
        "Horas": 1/3600,
        "Días": 1/86400,
        "Años": 1/31536000
    }

    return valor * factores[unidad_convertir] / factores[unidad_original]

if __name__ == "__main__":
    categoria = input("Selecciona la categoría (longitud, peso, temperatura, tiempo): ")
    cargar_unidades(categoria)
