$(document).ready(()=>{

    let $buttonSlider = $('header').find('.button'),
        $slider_modifications = $('.slider-modifications');

    $slider_modifications.sliderModification();

    $buttonSlider.on('click', ()=>{
        $slider_modifications.sliderModification();
    });
});