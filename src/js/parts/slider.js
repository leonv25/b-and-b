//slide - обгортка одного конкретного слайду(<div></div>), що входить до слайдера (повторюваний елемент)
//slideClass - клас slide із зміною властивості для display з none на block, при присвоєнні цього класу блок із слайдом відображається коли всі інші , які не мають цюго класу не відображаются
//slideTime - час через який змінюється один слайд на інший
    
function runSlider(slide, slideClass, slideTime) {
    function slideImg() {
        let i = 0;
        let id = setInterval(frame, slideTime);
        function frame() {
            if(i == slide.length-1) {
                slide[0].classList.add(slideClass);
                slide[slide.length-1].classList.remove(slideClass);
                i = 0;
            } else {
                i++;
                slide[i-1].classList.remove(slideClass);
                slide[i].classList.add(slideClass);
            }
        }
    }
    slideImg();
}
    
    

module.exports = runSlider;