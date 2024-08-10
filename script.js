var counter = 0;
document.getElementById("trigger").checked = false;

console.log("HELLO");

// $("#jtext").hide();
// $("jtext").attr("hidden", "")

// THIS WAS THE ORIGINAL FUNCTION I USED TO HIDE SHIT
// function hide(obj) {

//     var el = document.getElementById(obj);

//     el.style.display = 'none';

//     var sh = document.getElementById("displayme");
//     // var sh = $("#displayme"); this is the jquery version of getting the doc.getelement
//     sh.style.display = 'block';
//     sh.style.color = 'blue';


// }

// THIS IS THE FUNCTION I USED WITHOUT JQUERY 
function mega(obj) {
    console.log('TESTING EN MASSE');
    var effectThese = document.getElementById(obj).children;
    console.log(effectThese[0]);
    effectThese[0].style.display = 'none';
    effectThese[1].style.display = 'block';
    counter += 1;
    console.log(counter);
    ending(counter);

}

function ending(count) {
    if (count >= 2) {
        console.log("hello");
        $("h2").removeAttr("hidden");
        listEls = document.getElementsByClassName("xquee");
        for (let i = 0; i < listEls.length; i++) {
            console.log("ATTENTION");
            console.log(listEls[i]);
        }

        console.log(listEls);
        console.log(document.getElementById("trigger").checked);
        document.getElementById("trigger").checked = true;
        console.log(document.getElementById("trigger").checked);
        document.getElementById("jtext").style.animationDuration = "3s";
        document.getElementById("j2ext").style.animationDuration = "3s";




    }
}

// THIS IS THE JQUERY FUNCTION 

$("#jtest").click(function () {
    $(this).children(".meathide").fadeOut(400);
    $(this).children(".meatsplode").removeAttr("hidden");
    $(this).children(".meatsplode").fadeOut(1600);



    // $("#jtext").toggle();
    $(this).children("div").removeAttr("hidden");
    counter += 1;
    ending(counter);

});

$("#jsecond").click(function () {
    $(this).children(".meathide").fadeOut(400);
    $(this).children(".meatsplode").removeAttr("hidden");
    $(this).children(".meatsplode").fadeOut(1600);



    // $("#jtext").toggle();
    $(this).children("div").removeAttr("hidden");
    counter += 1;
    ending(counter);

});


// $("jtext").animate({animation: "xyquee 9s linear infinite",}, "slow", )

