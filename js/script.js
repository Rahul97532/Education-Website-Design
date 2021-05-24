burger = document.querySelector('.burger');
navBar = document.querySelector('.navbar');
navList = document.querySelector('.navlist');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click', () => {
    rightNav.classList.toggle('visibility-nav-resp');
    navList.classList.toggle('visibility-nav-resp');
    navBar.classList.toggle('height-nav-resp');
})