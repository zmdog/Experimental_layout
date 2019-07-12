import {horizontalSlider, verticalSlider} from "../../slider/sliders";

(function($){
    jQuery.fn.sliderModification = function(){
        let $sliders = $(".slider"),
            $checkboxes = $('.slider-wrapper').find('input'),
            $buttonModification = $('footer').find('.button'),
            modification_content = $(this).find('.modification_content'),
            methods = {
                header: function(header){
                    return '<li class=header>'+ header +'</li>'
                },
                changeColors : function(){
                    let context = this;
                    return {
                        controls: function(){
                            let $change_color = $(modification_content).find('.change-color');
                            $change_color.find('input').each(function(){
                                $(this).on('click',function(){
                                    let farbtastic = $.farbtastic('.colorpicker');
                                    $(this).each(function(){
                                        farbtastic.linkTo(this)
                                    });
                                    if($('.colorpicker').attr('id') === 'none'){
                                        let colorpicker = $('.change-color').find('.colorpicker');
                                        colorpicker.toggle();
                                        colorpicker.slideToggle(500);
                                        colorpicker.removeAttr('id')

                                    }
                                })
                            })
                        },
                        filler: function(){
                            return '<ul class=change-color id=close>'+ context.header('Выбор цвета') +
                                   '<li class=content>' +
                                   '<input type="text" placeholder="Хвост ползунка" id=color-track class=colorwell>' +
                                   '<input type="text" placeholder="Цвет ползунка" id=color-trail class=colorwell>' +
                                   '<input type="text" placeholder="Рукоятка ползунка" id=color-handler class=colorwell>' +
                                   '<div id=none class="colorpicker"></div></li></ul>'
                        },
                        confirmColors: function(context){
                            let color_track = $(modification_content).find('.content').find('#color-track').css('background-color'),
                                color_trail = $(modification_content).find('.content').find('#color-trail').css('background-color'),
                                color_handler = $(modification_content).find('.content').find('#color-handler').css('background-color');
                            $(context).parent().find('.ui-slider-range').css('background',color_track);
                            $(context).parent().find('.ui-slider-handle').css({'background-color':color_handler,
                                                                            'border-color':color_handler});
                            $(context).parent().find('.ui-slider').css('background-color',color_trail)
                        }
                    };
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
                            methods.changeColors().confirmColors(this)
                        }
                    });
                },
                stateModification: function(context){
                    $(context).find('.header').on('click', function(){
                        $(context).find('.content').slideToggle(500);
                    })
                }
            };

        function verticalModification(){
            modification_content.html(methods.changeStep())
        }
        function horizontalModification(){
            modification_content.html(methods.changeColors().filler() + methods.changeOrientation());
            methods.changeColors().controls()
        }


        return this.each(function () {
            if($(this).find('header').find('.button').text() === 'horizontal slider'){
                horizontalSlider($sliders);
                horizontalModification();
                $(this).find('ul').each((index, elem)=>{methods.stateModification(elem)});
                $buttonModification.on('click', function () {methods.confirmModifications()});
                $(this).find('header').find('.button').text('vertical slider');
            }else{
                verticalSlider($sliders);
                $(this).find('header').find('.button').text('horizontal slider');
                verticalModification();
                $buttonModification.on('click', function () {methods.confirmModifications()})
            }
        });
    };
})(jQuery);