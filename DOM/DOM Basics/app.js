function change(){
    let text = document.getElementsByClassName('text');
    text[0].innerHTML = 'Hello User!';
    size(text[0]);
  }
  
  function size(text){
    text.style.fontSize = '32px';
  }
  
  function hide(){
    let getit = document.getElementsByTagName('p');
    getit[0].style.display = 'none';
  }
  
  function show(){
    let getit = document.getElementsByTagName('p');
    getit[0].style.display = "block";
  }
  
  
  
  function on(){
    let change = document.getElementById('bulb');
    change.src="./pic_bulbon.gif";
  }
  
  function off(){
    let change = document.getElementById('bulb');
    change.src = "./pic_bulboff.gif";
  }
  
  
  function did(){
    let mail = document.getElementById('mail').value;
    let pass = document.getElementById('pass').value;
    if(mail == '' || pass == ''){
      alert("Enter the Input values");
    }
  }