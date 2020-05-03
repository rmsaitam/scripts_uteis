$( document ).ready(function(){
    $("#btn_calcular").click(function(){
        var n = $("#n").val();
        var p = $("#p").val();

        if(n == '' || p == '') {
            $("#mensagem").html("<b><font color='red'>Todos os campos são obrigatórios. </b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else if(n <=0 || p <=0) {
            $("#mensagem").html("<b><font color='red'>Os valores de n e p deve ser maior que 0. </b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else if(n < p) {
            $("#mensagem").html("<b><font color='red'>O valor n deve ser maior que p. </b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else {
            var P = fatorial(n);
            var A = P / fatorial(n - p);
            var C = A / fatorial(p);

            $("#resultado_permutacao").html("P("+n+")! = " +P);
            $("#resultado_arranjo").html("A("+n+","+p+") = " +A);
            $("#resultado_combinacao").html("C("+n+","+p+") = " +C);
        }
    });

    $("#resultado_permutacao").html("");
    $("#resultado_arranjo").html("");
    $("#resultado_combinacao").html("");

});

function fatorial(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    return fatorial(n-1)*n;
}