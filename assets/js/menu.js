function toogleMenu(){
    var leftPosition = document.querySelector('#menu').style.left;
    var position = leftPosition == '' ? '-100%' : leftPosition;
    if(position == '-100%'){
        document.querySelector('#menu').style.left = '0px';
    }else{
        document.querySelector('#menu').style.left = '-100%';
    }
}

document.querySelector('#menu-icon').addEventListener('click', toogleMenu);
document.querySelector('#menu-close').addEventListener('click', toogleMenu);