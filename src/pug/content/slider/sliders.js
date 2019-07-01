export function horizontalSlider ($sliders) {
            $sliders.each(function (){

                $(this).html(()=>{
                    let filler = '',
                        number = 0,
                        $step = $(this).data("max")/4;
                    for(let i=0; i<5; i++){
                        filler += '<li>'+number+'</li>';
                        number += $step
                    }
                    return '<ul>'+filler+'</ul>';
                });

                $(this).slider({
                    orientation: "horizontal",
                    range: "min",
                    min:  $(this).data("min"),
                    max:  $(this).data("max"),
                    step: $(this).data("step"),
                    value: $(this).data("start_position")
                });
            });
        }

export function verticalSlider($sliders) {
    $sliders.each(function (){
        $(this).slider({
            orientation: "vertical",
            range: "min",
            min:  $(this).data("min"),
            max:  $(this).data("max"),
            step: $(this).data("step"),
            value: $(this).data("start_position")
        });
    });
}