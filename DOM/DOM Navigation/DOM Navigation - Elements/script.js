let op;

// Get Child Elements 
const parent =  document.querySelector('.parent');
op = parent.children[1].innerText;
op = parent.children[1].className;
op = parent.children[1].nodeName;

parent.children[1].innerText = "Child Two";
parent.children[1].style.color = 'red';

parent.firstElementChild.innerText = "First Child";
parent.lastElementChild.innerText = "Last Child";


//Get parent elements from a child
const child = document.querySelector('.child');
op = child.parentElement;

child.parentElement.style.listStyleType = "none";
child.parentElement.style.border = '2px solid black';
child.parentElement.style.padding = '10px';


// Sibiling elements
const secondElement = document.querySelector('.child:nth-child(2)');
op = secondElement;

op = secondElement.nextElementSibling;
secondElement.nextElementSibling.style.backgroundColor = 'lightblue';
secondElement.previousElementSibling.style.backgroundColor = 'lightgreen';

console.dir(op);