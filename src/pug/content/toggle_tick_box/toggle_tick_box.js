$(document).ready(()=>{

    let $block_toggle = $('.toggle'),
        $block_tick_box = $('.tick-box');

    // Change the style that is associated with the id(toggle or tick box)
    $block_toggle.each((index, value)=>{

        $(value).on('click',()=>{
            if($(value).attr('id') === 'OFF'){
                $(value).attr('id', 'ON');
                $(value).children('p').text('ON')
            }else{
                $(value).attr('id', 'OFF');
                $(value).children('p').text('OFF')
            }
        });

    });
    $block_tick_box.each((index, value)=>{

        $(value).on('click',()=>{
            if($(value).attr('id') === 'OFF'){
                $(value).attr('id', 'ON');
            }else{
                $(value).attr('id', 'OFF');
            }
        });

    });
});