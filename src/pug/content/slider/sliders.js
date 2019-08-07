export function horizontalSlider ($sliders, settings) {

    let options = new Object(settings);

    $sliders.each(function (){

        $(this).find('.slider-label').html(()=>{
            let filler = '',
                number = options.min || $(this).data("min"),
                $step = (options.max || $(this).data("max"))/(options.interval || 4);
            for(let i=0; i<5; i++){
                filler += '<li>'+number+'</li>';
                number += $step
            }
            return '<ul>'+filler+'</ul>';
        });

        $(this).slider({
            orientation: "horizontal",
            range: "max",
            min:  options.min || $(this).data("min"),
            max:  options.max || $(this).data("max"),
            step: options.step|| $(this).data("step"),
            value: options.start_position || $(this).data("start_position")
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