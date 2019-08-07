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
                        append: function(){
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
                            $(context).find('.ui-slider-range').css('background',color_track);
                            $(context).find('.ui-slider-handle').css({'background-color':color_handler,
                                                                            'border-color':color_handler});
                            $(context).find('.ui-slider').css('background-color',color_trail)
                        }
                    };
                },
                changeOptions : function(){
                    return {
                        changeLabel : function(){},
                        changeInterval : function(){},
                        changeStep: function(){
                            return $(modification_content).find('.change-options')
                                                              .find('#slider-step')
                                                              .find('input').val()
                        },
                        changeMin: function(){},
                        changeMax: function(){},
                        changeValue: function(){},
                        changeOrientation : function(){},
                        confirmOptions: function(context){
                            let options = {
                                step:methods.changeOptions().changeStep(),
                                min:methods.changeOptions().changeMin(),
                                max:methods.changeOptions().changeMax(),
                                interval:methods.changeOptions().changeInterval(),
                                orientation:methods.changeOptions().changeOrientation(),
                                start_position:methods.changeOptions().changeValue()
                            };
                            horizontalSlider(context,options);
                        }
                    }
                },
                confirmModifications: function(){
                    $checkboxes.each(function(){
                        if($(this).is(':checked')){
                            let sliders = $(this).parent().find(".slider");
                            methods.changeColors().confirmColors(sliders);
                            methods.changeOptions().confirmOptions(sliders);
                        }
                    });
                }
            };

        function modification(){
            $checkboxes.css('display','block');
            methods.changeColors().append()
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