const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.navLinks');
    const navLink = document.querySelectorAll('.navLinks li');
 

    burger.addEventListener('click', () => {
           //toggle nav
        nav.classList.toggle('nav-active');
              
        //animate links
        navLink.forEach((link, index) => {
            if(link.style.animatio){
                 link.style.animatio = '';
            }else{
                link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
            }
        });
         //burger animation
        burger.classList.toggle('toggle');
    });    
}


navSlide(); //invoking the function 