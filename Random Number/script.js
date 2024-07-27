const IncreaseBtn = document.getElementById('IncreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const myNum = document.getElementById('myNum')


let num = 0 ;

IncreaseBtn.onclick = function () {
    num++;
 myNum.textContent = num;

}
resetBtn.onclick = function () {
    num =0;
 myNum.textContent = num;

}
decreaseBtn.onclick = function () {
    num--;
 myNum.textContent = num;

}