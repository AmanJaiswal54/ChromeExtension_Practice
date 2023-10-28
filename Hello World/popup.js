const input = document.getElementById('name');
const h2 = document.getElementById('h2');

input.addEventListener('change', (e) =>{
    h2.innerText = 'Hello ' + e.target.value;
})