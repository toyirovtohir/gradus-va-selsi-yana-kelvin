function convert() {
    let value = parseFloat(document.getElementById("inputValue").value);
    let type = document.getElementById("inputType").value;

    let c, f, k;

    if (isNaN(value)) {
        alert("Iltimos, son kiriting!");
        return;
    }

    if (type === "celsius") {
        c = value;
        f = (value * 9/5) + 32;
        k = value + 273.15;
    } else if (type === "fahrenheit") {
        c = (value - 32) * 5/9;
        f = value;
        k = (value - 32) * 5/9 + 273.15;
    } else if (type === "kelvin") {
        c = value - 273.15;
        f = (value - 273.15) * 9/5 + 32;
        k = value;
    }

    document.getElementById("celsiusResult").innerText = `Celsius (°C): ${c.toFixed(2)}`;
    document.getElementById("fahrenheitResult").innerText = `Fahrenheit (°F): ${f.toFixed(2)}`;
    document.getElementById("kelvinResult").innerText = `Kelvin (K): ${k.toFixed(2)}`;
}
