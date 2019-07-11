import {horizontalSlider, verticalSlider} from "../../slider/sliders";

(function($){
    jQuery.fn.sliderModification = function(){
        let $sliders = $(".slider"),
            $checkboxes = $('.slider-wrapper').find('input'),
            $slider_modifications = $('.slider-modifications'),
            $buttonModification = $('footer').find('.button'),
            context = $(this).find('.modification_content'),
            methods = {
                header: function(header){
                    return '<li class=header>'+ header +'</li>'
                },
                changeColors : function(){
                    return '<ul id=close>'+ this.header('Выбор цвета') +'<li class=content><input type="text" id="color" name="color" value="#123456">' +
                           '<div id="colorpicker"></div></li></ul>'
                },
                changeStep : function(){
                    return '<div>Horizontal-Step</div>'
                },
                changeOrientation : function(){
                    return '<ul id=close>'+ this.header('Ориентация слайдера') +'<li class=content>' +
                        '<div>Вертикальный</div><div>Горизонтальный</div></li></ul>'
                },
                changeLabel : function(){},
                changeInterval : function(){},
                confirmModifications: function(){
                    $checkboxes.each(function(){
                        if($(this).is(':checked')){
                            let color = $(context).find('.content').find('#color').css('background-color');
                            $(this).parent().find('.ui-slider-range').css('background',color)
                        }
                    });
                },
                stateModification: function(context){
                    $(context).find('.header').on('click', function(){
                        if($(context).attr('id') === 'close'){
                            $(context).find('.content').css({'display':'block'});
                            let height = $slider_modifications.find('.modification_content').height() + 'px';
                            $slider_modifications.find('.slider-modification').css({'height': height});
                            $(context).attr('id', 'open')
                        }else{
                            $(context).find('.content').css({'display':'none'});
                            let height = $slider_modifications.find('.modification_content').height() + 'px';
                            $slider_modifications.find('.slider-modification').css({'height': height});
                            $(context).attr('id', 'close')
                        }
                    })
                }
            };

        function verticalModification(){
            context.html(methods.changeStep())
        }
        function horizontalModification(){
            context.html(methods.changeColors() + methods.changeOrientation())
        }


        return this.each(function () {
            if($(this).find('header').find('.button').text() === 'horizontal slider'){
                horizontalSlider($sliders);
                $(this).find('header').find('.button').text('vertical slider');
                horizontalModification();
                $('#colorpicker').farbtastic('#color');
                $(this).find('ul').each((index, elem)=>{methods.stateModification(elem)});
                $buttonModification.on('click', function () {methods.confirmModifications()})
            }else{
                verticalSlider($sliders);
                $(this).find('header').find('.button').text('horizontal slider');
                verticalModification();
                $buttonModification.on('click', function () {methods.confirmModifications()})
            }
        });
    };
})(jQuery);