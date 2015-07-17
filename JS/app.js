$(document).ready(function() {
$('a[href*=#]').each(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname
&& this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
            $("#nav li a").removeClass("active");
            $(this).addClass('active');
$('html, body').animate({scrollTop: targetOffset}, 1000);
return false;
});
}
}
});
 
});

$(window).scroll(function(){
var st = $(this).scrollTop(),
    winH = $(this).height(),
    add = 140;

$('#slide2 p, #slide3 p, .jumbotron2 img, #birdsite img, #nelsonsite img').each(function(){
    var pos = $(this).position().top;

    if(st + winH >= pos + add){
        $(this).stop().animate({opacity:1, marginTop:10},'fast');
    }else{
        $(this).stop().animate({opacity:0, marginTop:0},'fast');
    }
});
});

$(window).scroll(function(){
var st = $(this).scrollTop(),
    winH = $(this).height(),
    add = 140;

$('h1').each(function(){
    var pos = $(this).position().top;

    if(st + winH >= pos + add){
        $(this).stop().animate({opacity:1, marginTop:0},'fast');
    }else{
        $(this).stop().animate({opacity:0, marginTop:0},'fast');
    }
});
});

$(window).scroll(function(){
var st = $(this).scrollTop(),
    winH = $(this).height(),
    add = 110;

$('.buttons li').each(function(){
    var pos = $(this).position().top;

    if(st + winH >= pos + add){
        $(this).stop().animate({opacity:1, marginTop:0},'fast');
    }else{
        $(this).stop().animate({opacity:0, marginTop:0},'fast');
    }
});
});
