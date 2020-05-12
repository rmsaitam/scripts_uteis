$( document ).ready(function() {
    $("#btn_gerar").click(function(){

        var a1 = $("#a1").val();
        var q  = $("#q").val();
        var n  = $("#n").val();
        var seq = ' ';
        
        if(a1 == '' || q == '' || n == '') {
            $("#mensagem").html("<b> <font color='red'>É obrigatório preencher todos os campos.</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else if(q == 0 || q == 1) {
            $("#mensagem").html("<b> <font color='red'>A razão da P.G deve ser maior que 0 e diferente de 1</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);    
        }
        else if(n <= 0) {
            $("#mensagem").html("<b> <font color='red'>O número de termos da P.G deve ser maior que 0</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else {
             //an = a1*(q^(n-1))
             an = parseFloat(a1) * parseFloat(Math.pow(q, parseInt((n-1))));
             //Sn = a1*(q^n - 1) / (q-1)
             Sn =  (parseFloat(a1) * parseFloat(Math.pow(parseFloat(q), parseInt(n)) -1) ) / parseFloat((q-1));
    
            for(var i=parseFloat(a1); i<=parseFloat(an); i=parseFloat(i)*parseFloat(q)) {
                seq = seq +i+ ' ';
            }
        
            $("#sequencia").html(seq);
            $("#resultado").html("an = " +an+ " Sn = " +Sn);
        }

       
    });
});