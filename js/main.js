$('.firstsldier').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    merge:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
    
});
$('.secondslider').owlCarousel({
    items:3,
    loop:true,
    margin:104,
    merge:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
    
});

function flipone(){
    document.getElementById('firstquestion').style.transform = 'rotateY(180deg)'
}