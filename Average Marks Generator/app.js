var subCount = Number(prompt("Enter No. of Subjects: "));
var sum = 0;

for(let i=0; i<subCount ;i++){
    let mark = Number(prompt("Enter Subject"+(i+1)+" mark: "));
    sum+=mark;
}

var avg = sum/subCount;
alert("Average: "+avg);
