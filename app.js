const grey = document.querySelector('.grey');
const black = document.querySelector('.black');
const white = document.querySelector('.white');
const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

grey.addEventListener('click',() => {
    document.body.style.backgroundColor = 'grey';
    h1.style.color = 'white';
    p.style.color = 'white';
})
black.addEventListener('click',() => {
    document.body.style.backgroundColor = 'black';
    h1.style.color = 'white';
    p.style.color = 'white';
})
white.addEventListener('click',() => {
    document.body.style.backgroundColor = 'white';
    h1.style.color = 'black';
    p.style.color = 'black';
})
blue.addEventListener('click',() => {
    document.body.style.backgroundColor = '#0096c7';
    h1.style.color = 'white';
    p.style.color = 'white';
})
yellow.addEventListener('click',() => {
    document.body.style.backgroundColor = '#fee440';
    h1.style.color = 'black';
    p.style.color = 'black';
})