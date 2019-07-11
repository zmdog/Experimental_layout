$(document).ready(()=>{

    let $buttonSlider = $('header').find('.button'),
        $slider_modifications = $('.slider-modifications');

    $slider_modifications.sliderModification();
    let height = $slider_modifications.find('.modification_content').height() + 'px';
    $slider_modifications.find('.slider-modification').css({'height': height});

    $buttonSlider.on('click', ()=>{
        $slider_modifications.sliderModification();

        let height = $slider_modifications.find('.modification_content').height() + 'px';
        $slider_modifications.find('.slider-modification').css({'height': height})
    });
});