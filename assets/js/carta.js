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

/*Filtro*/

// Obtener referencias a los botones y las tarjetas
const buttons = document.querySelectorAll('.buttons-filter button');
const cards = document.querySelectorAll('.content .card');

let activeFilter = 'All';

const updateFilter = (filterName) => {
    if (activeFilter === filterName) {
        activeFilter = 'All';
        buttons.forEach(btn => {
            btn.classList.remove('active');
        });
        cards.forEach(card => card.style.display = 'block');
    } else {
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons.forEach(btn => {
            // Reiniciar estilos a su estado normal
            btn.style.background = ''; // o cualquier otro estilo que estés utilizando
            btn.style.color = '';
        });
        activeFilter = filterName;
        buttons.forEach(button => {
            if (button.getAttribute('data-name') === activeFilter) {
                button.classList.add('active');
            }
        });

        cards.forEach(card => {
            if (activeFilter === 'All' || card.dataset.name === activeFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
};

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filterName = button.getAttribute('data-name');
        updateFilter(filterName);
    });

    button.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevenir el comportamiento predeterminado
        const filterName = button.getAttribute('data-name');
        updateFilter(filterName);
    });
});