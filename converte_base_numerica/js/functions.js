$( document ).ready(function(){
    $("#btn_converte").click(function(){
        var numero = $("#numero").val();
        if(numero == '' || numero <= 0) {
            $("#mensagem").html("<b><font color='red'>Campo número é obrigatório e deve ser maior que 0. </b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else {
            $("#dec2bin").html(numero+'<sub>10</sub> = ' +converteNumeroBaseNumerica(numero, 2)+ '<sub>2</sub>');
            $("#dec2octal").html(numero+'<sub>10</sub> = ' +converteNumeroBaseNumerica(numero, 8)+ '<sub>8</sub>');
            $("#dec2hexadecimal").html(numero+'<sub>10</sub> = ' +converteNumeroBaseNumerica(numero, 16)+ '<sub>16</sub>');
        }
    });
});

function converteNumeroBaseNumerica(numero, base) {
    switch(base) {
        case 2:
            console.log('entrou no case 2');
            return parseInt(numero, 10).toString(2);
            break;
        case 8:
            return parseInt(numero, 10).toString(8);
            break;
        case 16:
            return parseInt(numero, 10).toString(16).toLocaleUpperCase();
            break;
    }
}