function check_settings(options){

    let checked_options = new options.options(),
        settings = new options.options();

    if(+settings.min >= 0){checked_options.min = +settings.min}
    if(+settings.max > +settings.min){checked_options.max = +settings.max}
    if((+settings.step > 0) && (+settings.step < +settings.max)){checked_options.step = +settings.step}
    if(+settings.interval > 0 && +settings.interval <= 4){checked_options.interval = +settings.interval}
    if(+settings.start_position >= +settings.min && +settings.start_position <= +settings.max){checked_options.start_position = +settings.start_position}

    return checked_options
}

export function horizontalSlider ($sliders, options) {

    let checked_options = check_settings(options);
    console.log(checked_options);

    ($sliders).each(function (){

        $(this).find('.slider-label').html(()=>{
            let filler = '',
                number = checked_options.min || $(this).data("min"),
                $step = (checked_options.max || $(this).data("max"))/(checked_options.interval || 4);
            for(let i=0; i<5; i++){
                filler += '<li>'+number+'</li>';
                number += $step
            }
            return '<ul>'+filler+'</ul>';
        });

        $(this).slider({
            orientation: checked_options.orientation || "horizontal",
            range: "max",
            min:  checked_options.min || $(this).data("min"),
            max:  checked_options.max || $(this).data("max"),
            step: checked_options.step|| $(this).data("step"),
            value: checked_options.start_position || $(this).data("start_position")
        });
    });
}

export function verticalSlider($sliders) {
    let options = {
        min: 0,
        max: 500,
        step: 50,
        start_position: 30
    };
    $sliders.each(function (){
        $(this).find('.slider-label').html('');
        $(this).slider({
            orientation: "vertical",
            range: "min",
            min:  options.min || $(this).data("min"),
            max:  options.max || $(this).data("max"),
            step: options.step|| $(this).data("step"),
            value: options.start_position || $(this).data("start_position")
        });
    });
}