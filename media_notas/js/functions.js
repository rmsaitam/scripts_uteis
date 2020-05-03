$ ( document ).ready(function() {
    $("#btn_calcular").click(function(){
        var nota1 = $("#nota1").val();
        var nota2 = $("#nota2").val();
        var nota3 = $("#nota3").val();
        var nota4 = $("#nota4").val();

        if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
            $("#resultado").html("<b><font color='red'>Todos os campos são obrigatórios.</b>");
            setTimeout(function() {
                $("#resultado").html("");
            }, 5000);
        }
        else if(nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
            $("#resultado").html("<b><font color='red'>As notas devem ser com valores positivos.</b>");
            setTimeout(function() {
                $("#resultado").html("");
            }, 5000);
        }
        else {
            var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4))/4;

            if(media >= 7) {
                $("#resultado").html("<b>Média: " +media.toPrecision(5)+ " APROVADO");
            }
            else {
                $("#resultado").html("<b>Média:  "+media.toPrecision(5)+ " EXAME FINAL que precisará tirar nota maior ou igual a " +Math.abs(media-10));
            }
            
        }
        
    });
});