'use strict';
$(".start").click(function(){
    var star = $('.input')[0].value;
    star = star.replace(/\n|\W/m, " ");
    var wordsPerMinute = $('.speed')[0].value;;
    var speed = 60000/wordsPerMinute;
    star = star.split(" ");
    setInterval(function(){
        $('.read').html(star.shift());
    }, speed);
    $(".input").css("display","none");
    console.log(star);
});
$('.restart').click(function(){
    $(".input").css("display", "inline-block");
});


/*
so we have 60000 milliseconds 
we want 300 words every 60000 msc
so every word should take propotionately
60000/300



 */



