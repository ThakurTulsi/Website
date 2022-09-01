burger =  document.querySelector('.burger')
navbar =  document.querySelector('.navbar')
rightNav =  document.querySelector('.rightNav')
navlist =  document.querySelector('.navlist')
/*navbarbackground =  document.querySelector('.navbar-background')*/





burger.addEventListener('click', ()=>{

    rightNav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    /*navbar-background.classList.toggle('v-class-resp');*/

})