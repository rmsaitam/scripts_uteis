$( document ).ready(function(){
    $('#converte_str').on('change', function(){
        var str = $("#str").val();
        var converte_str = $("#converte_str").val();
        switch(converte_str){
            case 'maiuscula':
                $("#resultado").html(converteStrMaiuscula(str));
                break;
            case 'minusculo':
                $("#resultado").html(converteStrMinusculo(str));
                break;
            case 'negrito':
                $("#resultado").html(str.replace (/[A-Za-z]/g, converteStrNegrito));
                break;
            case 'italico':
                $("#resultado").html(converteStrItalico(str));
                break;
        }
    });
});

function converteStrMaiuscula(str) {
    return str.toUpperCase();
}

function converteStrMinusculo(str) {
    return str.toLowerCase();
}

function converteStrNegrito(str)
{
    let diff;
    if (/[A-Z]/.test (str))
    {
        diff = "𝗔".codePointAt (0) - "A".codePointAt (0);
    }
    else
    {
        diff = "𝗮".codePointAt (0) - "a".codePointAt (0);
    }
    return String.fromCodePoint (str.codePointAt (0) + diff);
}

function converteStrItalico(str) {
    return str.italics();
}


