$( document ).ready(function() {
    $("#btn_calcular").click(function() {
        var a = $("#valor_a").val();
        var b = $("#valor_b").val();
        var c = $("#valor_c").val();
        console.log("valor a = " +a+ "valor b = " +b+ " valor c =" +c);
        
        calculoEquacaoPrimeiroGrau(a, b, c);

        $("#valor_a").val("");
        $("#valor_b").val("");
        $("#valor_c").val("");
    });
});

function calculoEquacaoPrimeiroGrau(a, b, c) {
    if(a == '' && b == '' && c == '') {
        $("#mensagem").html("<b><font color='red'> Todos os campos são obrigatórios</b>");
        setTimeout(function() {
            $("#mensagem").html("");
        }, 5000);
    }
    else if(a == 0) {
        $("#mensagem").html("<b><font color='red'> O valor A da equação do 1º grau deve ser diferente de zero.</b>");
        setTimeout(function() {
            $("#mensagem").html("");
        }, 5000);
    }
    else {
        /*
        ax + b = c
        ax = c-b
        x = (c-b)/a
        */
        var x = (parseFloat(c) - parseFloat(b)) / parseFloat(a);
        
        $("#resultado").html("x= " +x+ "("+(parseFloat(c) - parseFloat(b))+ "/"+ parseFloat(a)+")");
        setTimeout(function() {
            $("#resultado").html("");
        }, 10000);
    }
}