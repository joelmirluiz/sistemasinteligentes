/* Mobile Menu */
function toogleMenu(){
    var menu = document.querySelector('.menu');
    var positionX = menu.style.marginLeft;
    positionX = (positionX == null || positionX == '') ? "-100%" : positionX;
    if(positionX == "-100%"){
        menu.style.marginLeft = "0px";
    } else{
        menu.style.marginLeft = "-100%";
    }
}
var buttonMenu = document.querySelector('#button-menu');
var buttonClose = document.querySelector('#button-close');
buttonMenu.addEventListener('click', toogleMenu);
buttonClose.addEventListener('click', toogleMenu);

/* Slider */
const ANIMATION_SLIDER = 6000;
document.addEventListener('DOMContentLoaded', function(){
    var moves = document.querySelectorAll('#slider .slider-item').length;
    var container = document.querySelector('#slider .slider-controller');
    var index = 0;
    setInterval(function(){
        var captions = document.querySelectorAll('.caption');
        for(let i = 0; i < captions.length; i++){
            captions[i].classList.remove('active');
        }
        var transform = -100 * (index);
        container.style.transform = "translateX($%)".replace('$', transform);
        captions[index].classList.add("active");
        if(index < moves - 1){
            index++;
        }else{
            index = 0;
        }
    }, ANIMATION_SLIDER);
});

/* Image Filter */
function applyFilter(filter){
    var imageGrid = document.querySelector('.images');
    var images = imageGrid.querySelectorAll('.image-item');
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove('hidden');
        images[i].classList.remove('show');
    }
    for(let i = 0; i < images.length; i++){
        var classes = images[i].classList;
        if (!classes.contains(filter)){
            images[i].classList.add('hidden');
        }else{
            images[i].classList.add('show');
        }
    }
}
function buttonFilter(){
    var buttons = document.querySelectorAll('.gallery-buttons button');
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', ()=>{
            var filter = buttons[i].dataset.filter;
            console.log(filter)
            applyFilter(filter);
        });
    }
}
buttonFilter();
applyFilter('alegrete');
