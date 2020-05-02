$( document ).ready(function() {
    $('#converte_para_temperatura').on('change', function(){
        var temperatura = $("#temperatura").val();
        var converte_para_temperatura = $("#converte_para_temperatura").val();
        switch(converte_para_temperatura) {
            case 'ctof':
                $("#resultado").html(temperatura + "&#8451; => " +converteCelsiusToFahrenheit(temperatura) + "&#8457;");
                break;
            case 'ftoc':
                $("#resultado").html(temperatura + "&#8457; => " +converteFahrenheitToCelsius(temperatura) + "&#8451;");
                break;
            case 'ctok':
                $("#resultado").html(temperatura +"&#8451; =>  " +converteCelsiusToKelvin(temperatura) + "&#8490;");
                break;
            case 'ktoc':
                $("#resultado").html(temperatura +"&#8490; =>  " +converteKelvinToCelsius(temperatura) + "&#8451;");
                break;
            case 'ktof':
                $("#resultado").html(temperatura +"&#8490; =>  " +converteKelvinToFahrenheit(temperatura) + "&#8457;");
                break;
            case 'ftok':
                $("#resultado").html(temperatura +"&#8457; =>  " +converteFahrenheitToKelvin(temperatura) + "&#8490;");
                break;
        }
    }); 

});

function converteCelsiusToFahrenheit(temperatura) {
    //°F = (°C x (9/5)) + 32
    return (temperatura * (9/5)) + 32;
}

function converteFahrenheitToCelsius(temperatura) {
    // (°F – 32) x (5/9)
    return ((temperatura - 32) * (5/9)).toPrecision(5);
}

function converteKelvinToCelsius(temperatura) {
    // K° - 273.15
    return parseFloat(temperatura - parseFloat(273.15)).toPrecision(5);
}
function converteCelsiusToKelvin(temperatura) {
    //  C° + 273.15
    return parseFloat((parseInt(temperatura)) + parseFloat(273.15));
}

function converteKelvinToFahrenheit(temperatura) {
    // (K - 273.15) * (9/5) + 32
    return parseFloat((parseInt(temperatura) - parseFloat(273.15)) * (9/5) + 32).toPrecision(5); 
}

function converteFahrenheitToKelvin(temperatura) {
    // F° - 32) * (5/9) + 273.15
    return parseFloat(parseInt(temperatura) - parseInt(32) * (5/9) + parseFloat(273.15)).toPrecision(5);
}