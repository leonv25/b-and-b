//btn_open - id кнопки визову форми
//btn_close - id кнопки закриття форми
//forms_block - id елемент-обгортки в якому містяться всі форми
//form - елемент- id обготрки однієї конкретної форми

function useModalWindow(class_btn_open, id_btn_close, id_forms_block, id_form) {
    let btn_open = document.querySelectorAll(class_btn_open),
        btn_close = document.getElementById(id_btn_close),
        forms_block = document.getElementById(id_forms_block),
        form = document.getElementById(id_form);
        btn_open.forEach(function(item) {
            if (item && btn_close && forms_block && form) {
                item.addEventListener('click', function() {
                    forms_block.style.display = 'block';
                    form.style.display = 'block';
                });
                btn_close.addEventListener('click', function() {
                    forms_block.style.display = 'none';
                    form.style.display = 'none';
                });
            }

        });
    
}
module.exports = useModalWindow;