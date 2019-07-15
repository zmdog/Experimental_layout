$(document).ready(()=>{

    let $buttonSlider = $('header').find('.button'),
        $slider_modifications = $('.slider-modifications');

    $buttonSlider.on('click', ()=>{
        $slider_modifications.sliderModification();
    });
});