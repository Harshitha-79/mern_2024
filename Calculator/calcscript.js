var num1="", num2="", op="";
function calc(ch){
    if(ch >='0' && cn<='9'){
        let box = document.getElementById("box").value;
        box+= ch;
        document.getElementById("box").value;
    }
    else if (ch == '='){
        let num2=document.getElementById("box").value;
        let expr = num1+op+num2;
        let res = eval(expr);
        num1 =""
        op=""
        document.getElementById("box").value=res;

    }
    else if (ch =='C')
    {
        num1 =""
        num2=""
        op =""
        document.getElementById("box").value ="";


    }
    else if (ch)
}