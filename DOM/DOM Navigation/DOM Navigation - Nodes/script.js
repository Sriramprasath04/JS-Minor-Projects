let op;

const parent = document.querySelector('.parent');

op = parent.childNodes;
op = parent.childNodes[0].textContent;
op = parent.childNodes[0].nodeName;
op = parent.childNodes[3].nodeName;
op = parent.childNodes[3].textContent;
op = parent.childNodes[3].innerHTML;
op = parent.childNodes[3].outerHTML;  

parent.childNodes[3].innerText = 'Child Selected';
parent.childNodes[7].style.color = 'red'; 

op = parent.firstChild;
op = parent.lastChild.textContent = "Hello";

//Parent Node
const child = document.querySelector('.child');

op = child.parentNode;
op = child.parentElement;
child.parentNode.style.backgroundColor = '#CCCC';
child.parentNode.style.margin = '10px';

//Sibilings
const secondItem = document.querySelector('.child:nth-child(3)');
op = secondItem.nextSibling.nextSibling.style.color = 'green'; //
op = secondItem.previousSibling.previousSibling.style.color = 'blue'; //

console.log(op);