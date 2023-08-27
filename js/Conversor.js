function convercion(){
    var cel=0;
    var far=0;
    var kel=0;
    cel=document.getElementById("celcius").value;
    cel=parseFloat(cel);
    far=parseFloat(far);
    kel=parseFloat(kel);

            far = (cel*9/5)+32;
            kel= cel+273.15
            //far=parseFloat(far);
            //kel=parseFloat(kel);
            document.getElementById("farenheit").value=(far);
            document.getElementById("kelvin").value=(kel);
}