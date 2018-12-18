$("#first-map").dblclick(function() {
    $(".pirate-boat").fadeIn();
    $("h2").text("Double click on boat!");
});

$(".pirate-boat").dblclick(function() {
    $("p").text("Go to Island and double click on it!");
    $("h2").hide();
    $(".island").fadeIn();
});

$(".island").dblclick(function() {
    $("body").css("background-color", "yellow");
    $("p").text("Scroll Up");
    $("h1").text("Click on map");
});

$("#first-map").click(function() {
    $("p").text("scroll-down");
    $(".Treasure").delay(8500).fadeIn();
});

$(".Treasure").click(function() {
    $(".Everything").hide();
    $("body").css("background-color", "orange");
    $(".gold").fadeIn();
});