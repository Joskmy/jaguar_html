const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 10)
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset: false
})

sr.reveal('.home-text',{delay:50});
sr.reveal('.home-img',{delay:100});
sr.reveal('.container',{delay:50});

sr.reveal('.about-img',{});
sr.reveal('.about-text',{delay:50});

sr.reveal('.middle-text',{});
sr.reveal('.row-btn, .menu-content',{delay:50});

sr.reveal('.review-content, .contact',{delay:50});

document.querySelectorAll('.row').forEach(row => {
    row.addEventListener('click', () => {
        const img = row.querySelector('img');
        const textContent = row.querySelector('.text-content');
        
        img.classList.toggle('blurred');
        textContent.classList.toggle('visible');
    });
});
