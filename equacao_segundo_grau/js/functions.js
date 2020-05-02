$( document ).ready(function() {
    $("#btn_calcular").click(function() {
        var a = $("#valor_a").val();
        var b = $("#valor_b").val();
        var c = $("#valor_c").val();
        console.log("valor a = " +a+ "valor b = " +b+ " valor c =" +c);
        
        calculoSegundoGrau(a, b, c);

        $("#valor_a").val("");
        $("#valor_b").val("");
        $("#valor_c").val("");
    });
});


function calculoSegundoGrau(a, b, c) {
    var delta, x1, x2;
    delta = b*b - 4*a*c;

    if(a == '' && b == '' && c == '') {
        $("#mensagem").html("<b><font color='red'> Todos os campos são obrigatórios</b>");
        setTimeout(function() {
            $("#mensagem").html("");
        }, 5000);
    }
    else if(a == 0) {
        $("#mensagem").html("<b><font color='red'> O valor A da equação do 2º grau deve ser maior que zero.</b>");
        setTimeout(function() {
            $("#mensagem").html("");
        }, 5000);
    }
    else if(delta == 0){ //raízes x1 e x2 iguais
        $("#resultado").html("Delta = " +delta+ " Raízes x1 = x2 => " +(-b/(2*a)));
        setTimeout(function() {
            $("#resultado").html("");
        }, 10000);
    }
    else if(delta > 0) { //raízes x1 e x2 diferentes
        x1 = -(b/(2*a)) - Math.sqrt(delta)/2*a;
        x2 = -(b/(2*a)) + Math.sqrt(delta)/2*a;
        $("#resultado").html("Delta= " +delta+ "<br> Raízes x1 = " +x1+ " e x2 = " +x2);
        setTimeout(function() {
            $("#resultado").html("");
        }, 10000);
    }
    else if(delta < 0) { //delta negativo não existe no Conjunto dos Números Reais, mas existe no Conjunto dos Números Complexos
        delta = -delta;
        var real = (-b/(2*a));
        var imaginaria = Math.sqrt(delta)/2*a;
        $("#resultado").html("Delta = " +(-delta)+ " Delta negativo. Não existe raiz no Conjunto dos Números Reais, mas existe no Conjunto dos Números Complexos <br>Raízes no Conjunto dos Números Complexos. <br> parte real: " +real+ " parte imaginaria = " +imaginaria+ " i");
        setTimeout(function() {
            $("#resultado").html("");
        }, 10000);
    }
}