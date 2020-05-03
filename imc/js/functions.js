$( document ).ready(function(){
    $("#btn_calcular").click(function(){
        var peso = $("#peso").val();
        var altura = $("#altura").val();
        
        if(peso == '' || altura == '') {
            $("#mensagem").html("<b> <font color='red'>Todos os campos são obrigatórios.</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else if(peso <= 0 || altura <= 0) {
            $("#mensagem").html("<b> <font color='red'>O peso e altura deve ser maior que 0.</b>");
            setTimeout(function() {
                $("#mensagem").html("");
            }, 5000);
        }
        else{
        
            imc = (parseFloat(peso) / (parseFloat(altura)*parseFloat(altura))).toPrecision(5);

            if(imc < 18.5) {
                $("#resultado").html("Seu IMC é: " +imc+ " <b>Magreza</b>");
            }
            else if(imc >= 18.5 && imc <=24.9) {
                $("#resultado").html("Seu IMC é: " +imc+ " <b>Normal</b>");
            }
            else if(imc >= 25 && imc <= 29.9) {
                $("#resultado").html("Seu IMC é: " +imc+ " <b>Sobrepeso Obesidade grau I</b>");
            }
            else if(imc >= 30 && imc <= 39.9) {
                $("#resultado").html("Seu IMC é: " +imc+ " <b>Obesidade grau II</b>");
            }
            else if(imc >= 40) {
                $("#resultado").html("Seu IMC é: " +imc+ " <b>Obesidade grave grau III</b>");
            }
        }
    });
});