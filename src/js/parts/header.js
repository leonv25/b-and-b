//humburger - document.querySelector('.клас елемента який клікається')
//humburger_class - 'клас для humburger який його змінює'
//menu - document.querySelector('.клас ul з меню сайту')
//menu_class - 'клас для menu який його змінює'

function addMobilemenu (humburger, humburger_class, menu, menu_class_open, menu_class_close) {
    if(humburger && menu) {
        humburger.addEventListener('click', function() {
            humburger.classList.toggle(humburger_class);
            menu.classList.toggle(menu_class_open);
        });
    }
}
module.exports = addMobilemenu;