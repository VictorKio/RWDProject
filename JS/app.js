const menu = document.querySelector('.hamburger-menu');
const primaryLink = document.querySelector('.links');

menu.addEventListener('click', function(){
    if(primaryLink.style.display === 'none'){
        primaryLink.style.display = 'flex';
        menu.className = 'fa-solid fa-xmark';
    }
    else{
        primaryLink.style.display = 'none';
        menu.className = 'fa-solid fa-bars hamburger-menu';
    }
})

