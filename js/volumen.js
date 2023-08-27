function volumen(){
    var rad=0;
    var alt=0;
    var resul=0;
    rad=document.getElementById("radio").value;
    alt=document.getElementById("altura").value;
    rad=parseFloat(rad);
    alt=parseFloat(alt);
    if(isNaN(rad) || isNaN(alt)){
        alert("TODOS LOS DATOS SON OBLIGATORIOS");
    }else{
        if(rad<0 || alt<0){
            alert("TODOS LOS CAMPOS DEBEN DE SER NUMEROS POSITIVOS");
        }else{
            resul=Math.PI*Math.pow(rad, 2)*alt/3;
            document.getElementById("result").value=(resul);
            }
    }
}