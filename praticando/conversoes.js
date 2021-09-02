const converterParaKelvin = function (escala, temperatura) {
    if (escala == "celcius") {
        return temperatura + 273.15
    }
    if (escala == "fahrenheit") {
        return (temperatura * 5 / 9) + 273.15
    }
}

const converteParaFahenheit = function (escala, temperatura) {
    if (escala == "celcius")
        return (temperatura - 32) * 5 / 9
}
if (escala == "kelvin") {
    return (temperatura - 273, 15) - 273, 1
}
const converteParaCelcius = function (escala, temperatura) {
    if (escala == "fahrenheit") {
        return (temperatura - 32) * 5 / 9
    }
    if (escala == "kelvin") {
        return temperatura - 273, 15 - 273, 1
    }
}
