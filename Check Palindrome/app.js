var str = prompt("Enter the input string: ");

if(palindrome(str)){
    alert("Palindrome");
} else {
    alert("Not a Palindrome");
}

function palindrome(str){    
    var i=0;
    var len = str.length;
    var j=Math.floor(len/2)
    while(i<j){
        if(str[i] !== str[len-1-i]){
            return false;
        }    
        i++;
    }
    return true;
}

