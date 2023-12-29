var num1 = Number(prompt("Enter 1st Number"));
var num2 = Number(prompt("Enter 2nd Number"));

var optn = Number(prompt("1)Addition\n2)Subraction\n3)Multiplication\n4)Division\n5)Exponent\nEnter your choice: "));
var res = 0;

switch(optn){
    case 1:
        res = num1+num2;
        alert("Result:"+res);
        break;
    case 2:
        res = num1-num2;
        alert("Result:"+res);
        break;
    case 3:
        res = num1*num2;
        alert("Result:"+res);
        break;
    case 4:
        res = num1/num2;
        alert("Result:"+res);
        break;
    case 5:
        res = num1**num2;
        alert("Result: "+res);
        break;
    default:
        alert("Enter a valid input");
}