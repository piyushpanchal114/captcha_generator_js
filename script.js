function captchaGenerator(){
    
    var alpha = new Array(
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
         'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    
    var newAlpha = []
    
    for (var i in alpha){
        newAlpha[i] = alpha[i].toLowerCase();
    }
    
    alpha =  alpha.concat(newAlpha);
    
    var newList = []
    var num = 0;
    while(num < 10){
        newList[num] = num
        num++;
    }
    alpha = alpha.concat(newList);

    var a = alpha[Math.floor(Math.random() * alpha.length)]
    var b = alpha[Math.floor(Math.random() * alpha.length)]
    var c = alpha[Math.floor(Math.random() * alpha.length)]
    var d = alpha[Math.floor(Math.random() * alpha.length)]
    var e = alpha[Math.floor(Math.random() * alpha.length)]
    var f = alpha[Math.floor(Math.random() * alpha.length)]
    
    var randomCaptcha = a + ' ' + b + ' ' + c + ' ' + d + ' ' + e + ' ' + f;
    // console.log(randomCaptcha);
    document.getElementById("captchaOne").value = randomCaptcha
}

function isValid(){
    var x = removeSpace(document.getElementById('captchaOne').value);
    var y = removeSpace(document.getElementById('captchaTwo').value);
    if(x == y){
        return alert(true);
    } else{
        return alert(false);
    }
}

function removeSpace(spacedString){
    a = spacedString.split(" ")
    v = a.join("")
    return v
}