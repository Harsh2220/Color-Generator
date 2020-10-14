const button = document.querySelector('button');
const back = document.getElementById('container');
const code = document.getElementById('code');

button.addEventListener('click',()=>{
let color = '#';
color += Math.random().toString(16).slice(2,8);
back.style.backgroundColor = color ;
console.log(color);

code.innerHTML = color ;

} )
