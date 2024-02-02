function onClick(){
    const ipstr = document.getElementById('ip');
    let op = document.getElementById('op');
    var res = 0;
    if(ipstr.value != ""){
        const words = ipstr.value.split(" ");
        res = words.length;
    }
    let optxt = "Words Count: "+res;
    op.textContent = optxt;
}