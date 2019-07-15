import {horizontalSlider, verticalSlider} from "../../slider/sliders";

(function($){
    jQuery.fn.sliderModification = function(){
        let $sliders = $(".slider"),
            $checkboxes = $('.slider-wrapper').find('input'),
            $buttonModification = $('footer').find('.button'),
            modification_content = $(this).find('.modification_content'),
            methods = {
                changeColors : function(){
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
                changeOptions : function(){
                    return {
                        controlsStep: function(){
                            let step = $(modification_content).find('.change-options')
                                                              .find('#slider-step')
                                                              .find('input').val()
                        },
                        changeInterval : function(){},
                        confirmOptions: function(){}
                    }
                },
                changeOrientation : function(){},
                changeLabel : function(){},
                confirmModifications: function(){
                    $checkboxes.each(function(){
                        if($(this).is(':checked')){
                            methods.changeColors().confirmColors(this);
                            methods.changeOptions().controlsStep();
                        }
                    });
                },
                stateModification: function(context){
                    $(context).find('.header').on('click', function(){
                        $(context).find('.content').slideToggle();
                    })
                }
            };

        function modification(){
            $checkboxes.css('display','block');
            methods.changeColors().controls();
            methods.changeOptions().changeInterval()
        }


        return this.each(function () {
            if($(this).find('header').find('.button').text() === 'горизонталный слайдер'){
                horizontalSlider($sliders);
                modification();
                $(this).find('ul').each((index, elem)=>{
                    $(elem).find('.header').on('click', function(){
                        $(elem).find('.content').slideToggle();
                    });
                });
                $buttonModification.on('click', function () {methods.confirmModifications()});
                $(this).find('header').find('.button').text('вертикальный слайдер');
            }else{
                verticalSlider($sliders);
                $(this).find('header').find('.button').text('горизонталный слайдер');
                $buttonModification.on('click', function () {methods.confirmModifications()});
                modification();
            }
        });
    };
})(jQuery);