'use strict';
$(".start").click(function(){
    // store the input as an array
    var star = $('.input')[0].value;
    star = star.replace(/\s/ig, " ");
    star = star.split(" ");

    // Words per minute
    var wordsPerMinute = $('.speed')[0].value;;
    var speed = 60000/wordsPerMinute;

    // let there be words
    var intervalHandle = setInterval(function(){
        $('.reading-area').html(star.shift());
        if(star.length === 0){
            // clear the interval when the array is empty
            clearInterval(intervalHandle);
            $(".reset").css("display", "inline-block");
        }
    }, speed);
    $(".staging-area").css("display","none");
});

$('.reset').click(function(){
    $(".staging-area").css("display", "flex");
    $(".reset").css("display", "none");
    $(".reading-area").html("");
});


/*

when the array is empty
we should display the reset button

 */



