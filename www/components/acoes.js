$(document).on('click','#butao', function(){
  //teste 
  var result;
    var idade = $(".idade").val();
    var genero = $(".genero").val();
    var altura = $(".altura").val();
    var peso = $(".peso").val();
    var atividade = $(".atividade").val();
    if(atividade==1){
          atividade=1.2;
    }
    if(atividade==2){
          atividade=1.375;
    }
    if(atividade==3){
          atividade=1.55;
    }
    if(atividade==4){
         atividade=1.725;
    }
    if(atividade==5){
         atividade=1.9;
    }
    if(genero=="Masculino"){
       /*Taxa de atividade x {66 + [(13,7 x Peso(kg)) + ( 5 x Altura(cm)) - (6,8 x Idade(anos))]}*/
       result=atividade*(66+(13.7*peso)+(5*altura)-(6.8*idade));  
    }else if(genero=="Feminino"){
    /*Taxa de atividade x {655 + [(9,6 x Peso(kg)) + (1,8 x Altura(cm)) - (4,7 x Idade(anos))]}  */
    result=atividade*(655+(9.6*peso)+(1.8*altura)-(4.7*idade));
    }
    
    $("#result").val(parseInt(result));
    
});

