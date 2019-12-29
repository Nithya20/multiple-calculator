form = document.querySelector("#calcForm");
result = document.querySelector("#result");

btnAdd = document.querySelector("#btnAdd");
btnMul = document.querySelector("#btnMul");
btnDiv = document.querySelector("#btnDiv");
btnSub = document.querySelector("#btnSub");

calcResult=document.querySelector("#calc");

 function showResult(operator)
 {
    let num1 = form.num1.value;
    let num2 = form.num2.value;
    let res=0;
    if(operator==="+")
    {
        res=Number.parseInt(num1)+Number.parseInt(num2);
    }
    else if(operator==="*")
    {
        res=Number.parseInt(num1)*Number.parseInt(num2);
            
        }
    
    else if(operator==="/")
    {
        res=Number.parseInt(num1)/Number.parseInt(num2);
    }
    else if(operator==="-")
    {
        res=Number.parseInt(num1)-Number.parseInt(num2);
    }


 
 result.innerHTML=`${num1} ${operator} ${num2} = ${res}`;
}
btnAdd.addEventListener("click", e => {
    e.preventDefault();
    showResult("+");
})

btnMul.addEventListener("click", e => {
    e.preventDefault();
    showResult("*");
})
btnDiv.addEventListener("click", e => {
    e.preventDefault();
    showResult("/");
})
btnSub.addEventListener("click", e => {
    e.preventDefault();
    showResult("-");
})




function textFunction(value) {
    var x = document.getElementById("textOne").value;
    var newString='';
    if(value === 'reverse'){
        for (var i = x.length - 1; i >= 0; i--) { 
            newString += x[i];;
        }
        document.getElementById("textResult").innerHTML = newString;
    }else if(value === 'upper'){
        newString = x.toUpperCase()
        document.getElementById("textResult").innerHTML = newString;
    }else{
        for (var i = x.length - 1; i >= 0; i--) { 
            newString += x[i];;
        }
        if(x === newString){
            document.getElementById("textResult").innerHTML = 'palindrom';
        }
        else{
            document.getElementById("textResult").innerHTML = 'not Palindrom';
        }
    }
   
  }



    







