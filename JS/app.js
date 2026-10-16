const menu = document.querySelector('.hamburger-menu');
const primaryLink = document.querySelector('.links');

menu.addEventListener('click', function(){

    primaryLink.classList.toggle('show');

    if (primaryLink.classList.contains('show')) {
        menu.className = 'fa-solid fa-xmark hamburger-menu';
    } 
    else {
        menu.className = 'fa-solid fa-bars hamburger-menu';
    }
})

