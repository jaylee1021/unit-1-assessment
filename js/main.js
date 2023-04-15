const result = document.getElementById('result');
const plusButton = document.getElementById('plus-button');
const minusButton = document.getElementById('minus-button');
const inputValue = document.getElementById('input-num');

let sumNum = 0

plusButton.addEventListener('click', function () {
    let number = parseInt(inputValue.value);
    if (number) {
        sumNum += number;
        result.textContent = sumNum;
        changeColor();
    } else {
        alert('Need to input a number')
        inputValue.value = '';
    }

})

minusButton.addEventListener('click', function () {
    let number = parseInt(inputValue.value);
    if (number) {
        sumNum -= number;
        result.textContent = sumNum;
        changeColor();
    } else {
        alert('Need to input a number')
        inputValue.value = '';
    }
})

function changeColor() {
    if (sumNum < 0) {
        result.style.color = 'red';
    } else {
        result.style.color = 'black';
    }
}