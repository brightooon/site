const navmove = () =>{
    const menu = document.querySelector(".menu-toggle");
    const menulink = document.querySelector(".nav-menu");
    const links = document.querySelector(".nav-link");
    menu.addEventListener('click', ()=>{
        menu.classList.toggle('toggle');
        menulink.classList.toggle('menu-active');
        links.forEach((link, index)=>{
            if(link.style.animation) link.style.animation='';
            else{
            link.style.animation = `navlinkf 0.5s ease forwards ${index/3}s`;}
        });
    });
}
navmove();
