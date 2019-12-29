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