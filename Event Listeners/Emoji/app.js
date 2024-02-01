const getEmoji = document.querySelector('#emoji');

const emojis = ["😂", "🤣", "😍", "😒", "😘", "😁", "😉", "😅", "😎", "😋", "🤩", "🫡", "😐", "🤨", "😥", "😏", "😶‍🌫️", "🤐", "😪", "😫", "🥱", "😴", "😜", "🙃", "🫤", "🤯", "😨", "😬", "🤪","🤫"];

getEmoji.addEventListener('mouseover', ()=>{
    let random = Math.floor(Math.random()*emojis.length);
    getEmoji.innerHTML = emojis[random];
})