$(document).ready(function(){
    $("area[rel^='prettyPhoto']").prettyPhoto();
    
    $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
    $(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

    
});

function changeGrid1(){
    let x = document.getElementById('main');
    x.style.display = "inline";

    let y = document.getElementById('main2');
    y.style.display = "none";

    let z = document.getElementById('main3');
    z.style.display = "none";
    

}

function changeGrid2(){
    let x = document.getElementById('main');
    x.style.display = "none";

    let y = document.getElementById('main2');
    y.style.display = "inline";

    let z = document.getElementById('main3');
    z.style.display = "none";
    

}
function changeGrid3(){
    let x = document.getElementById('main');
    x.style.display = "none";

    let y = document.getElementById('main2');
    y.style.display = "none";

    let z = document.getElementById('main3');
    z.style.display = "inline";
    

}