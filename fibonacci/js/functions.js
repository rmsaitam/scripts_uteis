$( document ).ready(function() {
    $("#btn_gerar").click(function() {
        var n = $("#n_termos").val();
        if(n == '' || n == 0) {
            $("#mensagem").html("<b><font color='red'>Campo número de termos não preenchido ou foi preenchido com valor 0.</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else if(n > 0) {
            $("#mensagem").html("");
            var res = '';
            for(var i=1; i<=n; i++) {
                res += fibonacci(i) + ' ';
                $("#resultado").html(res);
            }
        }
    });
});

function fibonacci(n) {
    if(n == 0 || n == 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n-2);
}