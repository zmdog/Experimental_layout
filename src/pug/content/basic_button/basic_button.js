import {horizontalSlider, verticalSlider} from "../slider/sliders";

$(document).ready(()=>{

    let $button = $('header').find('.button'),
        $sliders = $(".slider");
    horizontalSlider($sliders);

    function fillModifications(context, filler, $button){

        if('horizontal slider' === $button.text()){
            horizontalSlider($sliders);
            $button.text('vertical slider')
        }else{
            verticalSlider($sliders);
            $button.text('horizontal slider')
        }
        context.children('.modification_content').html(filler);
        let height = context.children('.modification_content').height() + 'px';
        context.css({'height': height})
    }

    $button.on('click', function () {
        let $slider_modification = $('.slider-modification'),
            horizontal = '<div>ГОРИЗОНТАЛЬНЫЙ</div>' + '<div>ГОРИЗОНТАЛЬНЫЙ</div>' + '<div>ГОРИЗОНТАЛЬНЫЙ</div>',
            vertical = '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>',
            filler = function (button) {
                return ('horizontal slider' === button.text())? horizontal : vertical;
            };

        fillModifications($slider_modification, filler($(this)), $(this));
    });


});