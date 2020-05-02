$( document ).ready(function() {
    $("#btn_gerar").click(function(){

        var a1 = $("#a1").val();
        var r  = $("#r").val();
        var n  = $("#n").val();
        var seq = ' ';
        
        if(a1 == '' || r == '' || n == '') {
            $("#mensagem").html("<b> <font color='red'>É obrigatório preencher todos os campos.</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else if(r == 0 || r == 1) {
            $("#mensagem").html("<b> <font color='red'>A razão da P.A deve ser maior que 0 e diferente de 1</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);    
        }
        else if(n <= 0) {
            $("#mensagem").html("<b> <font color='red'>O número de termos da P.A deve ser maior que 0</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else {
             //an = a1 + (n-1)*r 
             an = parseFloat(a1) + parseInt((n-1)*r);
             //Sn = ((a1 + an)*n )/2
             Sn = ((parseFloat(a1) + parseFloat(an)) * parseInt(n))/2;

            for(var i=a1; i<=an; i=parseInt(i)+parseInt(r)) {
                seq = seq +i+ ' ';
            }
    
            $("#sequencia").html(seq);
            $("#resultado").html("an = " +an+ " Sn = " +Sn);
        }

       
    });
});