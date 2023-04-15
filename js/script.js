const $arrow1 = document.querySelector('#arrow1');
const $arrow2 = document.querySelector('#arrow2');


function Carrosel($tmp){
    const $divCar = document.querySelector('#slideCar');

        if($tmp == 1){
            $divCar.style.left = '-421px';
        }else{
            $divCar.style.left = '0px';
        }
}

$arrow1.addEventListener('click',() => { Carrosel(0); });
$arrow2.addEventListener('click',() => { Carrosel(1); });