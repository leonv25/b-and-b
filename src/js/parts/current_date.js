//inputDate - тег input з атребутом name="date", скрипт буде працювати, якщо додатково задати атребут min в html
//.toISOString().split('T')[0] задається для того щоб обрізати лишні дані, які видає функція(через них не атребут min не розпізнає формат дати)
function currentDate(inputDate) {
    let elements = document.querySelectorAll(inputDate);
    if (elements) {
        elements.forEach(function(item) {
            let minDate = item.getAttribute('min'),
                curDate = new Date().toISOString().split('T')[0];
            if(minDate && curDate) {
                item.setAttribute('min', curDate);
            }
        });
    }
}

module.exports = currentDate;