document.querySelectorAll('.digits, .operation' )
    .forEach(el => el.addEventListener('click', digitOperClick ) );
    
function digitOperClick(e) {
    const target = e.target;
    const display = document.querySelector('.display');
    display.value += target.innerText;
}    

document.querySelector('.equal')
    .addEventListener('click', equal);
    
function equal() {
    const display = document.querySelector('.display');
    display.value = eval(display.value);
}

document.querySelector('.clear')
    .addEventListener('click', clear);
    
function clear() {
    const display = document.querySelector('.display');
    display.value = '';
}    