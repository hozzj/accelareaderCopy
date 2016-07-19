$(".mode").click(function(){
    if($(".mode").text() === "Light mode"){
        $("body").css("background", "aliceblue");
        $(".input").css("background", "white")
                   .css("border","black solid 2px");
        $(".container").css("color", "#3a3a3a");
        $(".reading-area").css("color", "#3a3a3a");
        $(".mode").html("Dark mode");
    } else {
        $("body").css("background", "#3a3a3a");
        $(".input").css("background", "#ccc")
                   .css("border","white solid 2px");
        $(".container").css("color", "aliceblue");
        $(".reading-area").css("color", "#aliceblue");
        $(".mode").html("Light mode");
    }
});