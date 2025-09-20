var calcBody = document.getElementById('calc-body');
var display = document.getElementById('display');

calcBody.addEventListener('click', function (event) {
    var target = event.target;
    var value = target.value;
    if (target.nodeName === 'BUTTON') {
        if (value === 'AC') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (value === 'C') {
            clearEntry();
        } else {
            displayValue(target.innerText, value);
        }
    }
});

function calculate() {
    try {
        var result = math.evaluate(display.value);
        display.innerText = result;
        display.value = result;
    } catch (error) {
        display.innerText = 'Invalid Input';
        display.value = '';
        console.log(error);
    }
}

function clearDisplay() {
    display.innerText = '0';
    display.value = '0';
}

function displayValue(displayText, operator) {
    if (display.innerText === '0') {
        display.innerText = displayText;
        display.value = operator;
    } else {
        display.innerText += displayText;
        display.value += operator;
    }
}

function clearEntry() {
    display.innerText = display.innerText.substring( 0, 
    display.innerText.length -1);
    display.value = display.innerText.substring( 0, 
    display.value.length -1);
}
