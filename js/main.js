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

function show(){
    let z = document.getElementById('fasi').style.height
    if(z == 0){
        document.getElementById('fasio').innerHTML = 'ფასი&#8722;'
        document.getElementById('fasi').style.height = '60px';
        document.getElementById('fasi').style.marginTop = '20px';
        document.getElementById('fasi').style.marginBottom = '20px'
    }
    else if(z == '60px'){
        document.getElementById('fasio').innerHTML = 'ფასი&#43;'
        document.getElementById('fasi').style.height = '0px';
        document.getElementById('fasi').style.marginTop = '0px';
        document.getElementById('fasi').style.marginBottom = '0px'
    }
    else{
        document.getElementById('fasio').innerHTML = 'ფასი&#8722;'
        document.getElementById('fasi').style.height = '60px';
        document.getElementById('fasi').style.marginTop = '20px';
        document.getElementById('fasi').style.marginBottom = '20px'
    }
}
function shows(){
    let z = document.getElementById('feri').style.height
    if(z == 0){
        document.getElementById('ferio').innerHTML = 'ფერი&#8722;'
        document.getElementById('feri').style.height = '80px';
    }
    else if(z == '80px'){
        document.getElementById('ferio').innerHTML = 'ფერი&#43;'
        document.getElementById('feri').style.height = '0px';
    }
    else{
        document.getElementById('ferio').innerHTML = 'ფერი&#8722;'
        document.getElementById('feri').style.height = '80px';
    }
}
function gafiltre(){
    var num1, num2, number1, number2;
    num1 = document.getElementById("minnumber").value;
    num2 = document.getElementById("maxnumber").value;
    number1 = num1 ;
    number2 = num2 ;
    parseInt(number1) ;
    parseInt(number2) ;
    console.log(number1) ;
    console.log(number2) ;
    if(number1 >= 0 & number1 < 400 ){
        document.getElementById('forezerozero').style.width = '400px';
        document.getElementById('forezerozero').style.height = '570px';
        document.getElementById('forezerozero').style.overflow = 'visible';
        document.getElementById('forezerozeroo').style.width = '400px';
        document.getElementById('forezerozeroo').style.height = '570px';
        document.getElementById('forezerozeroo').style.overflow = 'visible';
        document.getElementById('foretwozero').style.width = '400px';
        document.getElementById('foretwozero').style.height = '570px';
        document.getElementById('foretwozero').style.overflow = 'visible';
    }
    else if(number1 >= 400 & number1 <= 420 & number2 =='' || number2 >= 420){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '400px';
        document.getElementById('foretwozero').style.height = '570px';
        document.getElementById('foretwozero').style.overflow = 'visible';
    }
    else if(number1 > 420 & number1 <450){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        console.log(number1)
    }
    else if(number1 > 450 & number1 < 500 ){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('fivezerozero').style.height = '0px';
        document.getElementById('fivezerozero').style.overflow = 'hidden';
    }
    else if(number1 > 500 & number1 < 600){
        document.getElementById('forezerozero').style.width = '0px';
        document.getElementById('forezerozero').style.height = '0px';
        document.getElementById('forezerozero').style.overflow = 'hidden';
        document.getElementById('forezerozeroo').style.width = '0px';
        document.getElementById('forezerozeroo').style.height = '0px';
        document.getElementById('forezerozeroo').style.overflow = 'hidden';
        document.getElementById('foretwozero').style.width = '0px';
        document.getElementById('foretwozero').style.height = '0px';
        document.getElementById('foretwozero').style.overflow = 'hidden';
        document.getElementById('sixzerozero').style.width = '0px';
        document.getElementById('sixzerozero').style.height = '0px';
        document.getElementById('sixzerozero').style.overflow = 'hidden';
    }
    else{
        document.getElementsByClassName('chamonatvalisinner').innerHTML= "shedegi ver modizebna"
    }
}
