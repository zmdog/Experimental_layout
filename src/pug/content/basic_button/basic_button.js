$(document).ready(()=>{

    let $buttons = $('header').find('.button');

    function fillModifications(context, filler){
        context.children('.modification_content').html(filler);
        let height = context.children('.modification_content').height() + 'px';
        context.css({'height': height})
    }

    $buttons.on('click', function () {
        let $slider_modification = $('.slider-modification'),
            horizontal = '<div>ГОРИЗОНТАЛЬНЫЙ</div>' + '<div>ГОРИЗОНТАЛЬНЫЙ</div>' + '<div>ГОРИЗОНТАЛЬНЫЙ</div>',
            vertical = '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>' + '<div>ВЕРТИКАЛЬНЫЙ</div>',
            filler = function (button) {
                return ('horizontal slider' === button.text())? horizontal : vertical;
            };

        fillModifications($slider_modification, filler($(this)));
    });


});