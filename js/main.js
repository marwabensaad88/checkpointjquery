//document.getElementsByTagName(button).addEventListener("click",fuction())
function makeBold() {

    var area = document.getElementById("textarea");
    if (document.getElementById("textarea").style.fontWeight == "bold") {
        document.getElementById("textarea").style.fontWeight = "normal";
    } else {
        document.getElementById("textarea").style.fontWeight = "bold";

    }
}

function makeItalic() {

    var area = document.getElementById("textarea");
    if (document.getElementById("textarea").style.fontStyle == "italic") {
        document.getElementById("textarea").style.fontStyle = "normal";
    } else {
        document.getElementById("textarea").style.fontStyle = "italic";

    }
}

function makeUnderline() {

    var area = document.getElementById("textarea");
    if (document.getElementById("textarea").style.textDecoration == "underline") {
        document.getElementById("textarea").style.textDecoration = "none";
    } else {
        document.getElementById("textarea").style.textDecoration = "underline";

    }
}

function changer() {
    select = document.getElementById("select").value;
    console.log(select)
    document.getElementById("textarea").style.fontSize = select;



}

function makedStyle() {
    select = document.getElementById("selectt").value;
    console.log(select)
    document.getElementById("textarea").style.fontFamily = select;



}

$(document).ready(function () {

    $("#igg1").mouseenter(function () {
        $("#igg1 > .butcours").toggle();

    })
    $("#igg1").mouseleave(function () {
        $("#igg1 > .butcours").hide();
    })

    $(".butcours").hide();
    $("#igg2").mouseenter(function () {
        $("#igg2 > .butcours").toggle();
    });
    $("#igg2").mouseleave(function () {
        $("#igg2 > .butcours").hide();
    })





    $("#igg3").mouseenter(function () {
        $("#igg3 > .butcours").toggle();
    });
    $("#igg3").mouseleave(function () {
        $("#igg3 > .butcours").hide();
    })





    $("#igg4").mouseenter(function () {
        $("#igg4 > .butcours").toggle();
    });
    $("#igg4").mouseleave(function () {
        $("#igg4 > .butcours").hide();
    })





    $("#igg5").mouseenter(function () {
        $("#igg5 > .butcours").toggle();
    });
    $("#igg5").mouseleave(function () {
        $("#igg5 > .butcours").hide();
    })
    $("#igg6").mouseenter(function () {
        $("#igg6 > .butcours").toggle();
    });
    $("#igg6").mouseleave(function () {
        $("#igg6 > .butcours").hide();
    })


});