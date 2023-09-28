const hamburger = document.querySelector('.nav__hamburger img')
const navLinks = document.querySelector('.nav__links')
const allNavLinks = document.querySelectorAll('.nav__links-link')


const checkNavMobile = () => {
        navLinks.classList.remove('')
}
const openMobileNav = () => {    
    navLinks.classList.toggle('nav__links-active')
}


hamburger.addEventListener('click', openMobileNav)
allNavLinks.forEach(link => {
    link.addEventListener('click', checkNavMobile)
});