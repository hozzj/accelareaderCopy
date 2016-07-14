$(".start").click(function () {
    // store the input as an array
    var star = $(".input")[0].value;
    star = star.replace(/\s/g, " ");
    console.log(star);
    star = star.split(" ");

    // Words per minute
    var wordsPerMinute = $(".speed")[0].value;
    var speed = 60000 / wordsPerMinute;

    // let there be words
    var intervalHandle = setInterval(function () {
        $(".reading-area").html(star.shift());
        if (star.length === 0) {
            // clear the interval when the array is empty
            clearInterval(intervalHandle);
            $(".reset").css("display", "inline-block");
        }
    }, speed);
    $(".staging-area").css("display", "none");
});

// reset everything to staging
$(".reset").click(function () {
    $(".staging-area").css("display", "flex");
    $(".reset").css("display", "none");
    $(".reading-area").html("");
});

// template setting
$(".ar").click(function () {
    var str = "البرنامج هو أشياء كثيرة. انه نص كتبه مبرمج؛ وهو القوة الموجهة التي تجعل الحاسوب يقوم بما يقوم به؛ وهو البيانات التي في ذاكرة الحاسوب، ورغم ذاك هو الذي يتحكم بما يحدث في نفس الذاكرة التي يعيش بها. جافاسكربت مقنعة .. مارين هافربيكي (اللي هيعلق على الترجمة يستعد لغضبي =D :)";
    $(".input")[0].value = str;
});

$(".en").click(function () {
    var str = "A program is many things. It is a piece of text typed by a programmer; it is the directing force that makes the computer do what it does; it is data in the computer’s memory, yet it controls the actions performed on this same memory. Eloquent Javascript .. Marijn Haverbeke";
    $(".input")[0].value = str;
});