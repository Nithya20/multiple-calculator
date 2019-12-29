function numberFunction(value){
    var x = document.getElementById('numString').value;
    var revString='';
    var rev = x.toString();
    for (var i = rev.length - 1; i >= 0; i--) { 
        revString += rev[i];;
    }
    if(value === 'reverse'){
        document.getElementById("stringResult").innerHTML = revString;
    }else if(value === 'fact'){
        var fact = 1;
        for(var i = 1; i <=x ; i++){
            fact = fact * i;
        }
        document.getElementById("stringResult").innerHTML = fact;
    }
        else if(rev === revString){
            document.getElementById("stringResult").innerHTML = 'palindrom';
        }else{
            document.getElementById("stringResult").innerHTML = 'not Palindrom'
        
    }
}