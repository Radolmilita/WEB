//
//Lab2.js
//Created by Valerij Dimitriev
//
//on 2021.09.24


function clear() {
    document.forms[0].lowerBorder.value = "";
    document.forms[0].upperBorder.value = "";
    document.forms[0].stepValue.value = "";
    listLength=document.forms[0].tabList.length;
    for (i=0;i<=listLength;i++) {
        document.forms[0].tabList.options[0]= null;
        }
    }
function tabulateWithFor() {
        lowerBorder=parseInt(document.forms[0].lowerBorder.value);
        upperBorder=parseInt(document.forms[0].upperBorder.value);
        stepValue=parseFloat(document.forms[0].stepValue.value);
        i=0;

    for (x=lowerBorder;x<=upperBorder;x=x+stepValue) {
        let a = Math.pow(x-1, 2);
        let b = Math.pow(a, 0,3333);
        y = 4 * Math.pow(x, 3 * b);
        t="для x = " + Math.round (x*10) / 10 + " y = " + Math.round (y*10) / 10 ;
        document.forms[0].tabList.options[i]= new Option(t);
        i ++ ;
        }
    }

    function tabulateWithWhile(){
        lowerBorder=parseInt(document.forms[0].lowerBorder.value);
        upperBorder=parseInt(document.forms[0].upperBorder.value);
        stepValue=parseFloat(document.forms[0].stepValue.value);
        let x = lowerBorder;
        j=0;
        while(x<=upperBorder){
            let a = Math.pow(x-1, 2);
            let b = Math.pow(a, 0,3333);
            y = 4 * Math.pow(x, 3 * b);
            t1="для x = " + Math.round (x*10) / 10 + " y = " + Math.round (y*10) / 10 ;
            document.forms[0].tabList1.options[j]= new Option(t1);
            x+=stepValue;
            j ++ ;

        }
    }

    function tabulateWithDo(){
        lowerBorder=parseInt(document.forms[0].lowerBorder.value);
        upperBorder=parseInt(document.forms[0].upperBorder.value);
        stepValue=parseFloat(document.forms[0].stepValue.value);
        let x =lowerBorder;
        k = 0;
        do{
            let a = Math.pow(x-1, 2);
            let b = Math.pow(a, 0,3333);
            y = 4 * Math.pow(x, 3 * b);
            t2="для x = " + Math.round (x*10) / 10 + " y = " + Math.round (y*10) / 10 ;
            document.forms[0].tabList2.options[k]= new Option(t2);
            x+=stepValue;
            k ++ ;
        }
        while(x<=upperBorder);
    }
function draw(){
    let a = Math.pow(x-1, 2);
    let b = Math.pow(a, 0,3333);
    y = x => 4 * Math.pow(x, 3 * b);// функция
    let z = 20; // масштаб
    let c = document.querySelector('canvas');
    let ctx = c.getContext('2d');
    
    // центровочка
    ctx.translate(c.width/2, c.height/2)
       
    // сетка
    ctx.beginPath();
    for (let x = -11; x <11; x++) {
      ctx.moveTo(x*z, -c.height/2);
      ctx.lineTo(x*z, c.height/2);
      ctx.moveTo(-c.width/2, x*z);
      ctx.lineTo(c.width/2, x*z);
    }
    ctx.stroke();
    
    // график функции
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.beginPath();
    for (var i = -10; i <= 10; i += 2.5) {
      ctx[i?'lineTo':'moveTo'](i*z, -y(i)*z);
    }
    ctx.stroke();

}