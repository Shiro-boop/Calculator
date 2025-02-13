'use strict'

let result = document.querySelector('.result__form'),
    resultPast = document.querySelector('.result__past__form')
const btns = document.querySelector('.buttons'),
    operands = document.querySelectorAll('.operand'),
    equals = document.querySelector('.equals'),
    darkTheme = document.querySelector('.dark__theme'),
    lightTheme = document.querySelector('.light__theme');

let firstSum = 0,
    operand,
    secondSum = 0;
    

btns.addEventListener('click', (e) => {
    if(e.target.classList.contains('button')) {
        result.textContent += e.target.textContent
    } else if (e.target.classList.contains('all_clear')) {
        result.textContent = '';
        resultPast.textContent = '';
        firstSum = 0;
        operand = '';
        secondSum = 0;
    }
})

operands.forEach(item => {
    item.addEventListener('click', (e) => {
        if(operand === '+' || operand === "-" || operand === '*' || operand === "/") {
            alert('Поддерживается только одна операция')
        } else {
            firstSum = result.textContent;
            operand = e.target.textContent;
            result.textContent += e.target.textContent

        }
    })
})

equals.addEventListener('click', (e) => {


    if(operand === '+') {
        let secondSum = result.textContent.slice(result.textContent.search(/\+/) + 1); // Получаю из result строку, нахожу на какой позиции находится +, отсекаю от строки первую часть с плюсом

        result.textContent = +firstSum + +secondSum;
        resultPast.textContent = `${+firstSum} + ${+secondSum} = ${result.textContent}`;

        firstSum = 0;
        operand = '';
        secondSum = 0;
    } else if (operand === '-') {
        let secondSum = result.textContent.slice(result.textContent.search(/\-/) + 1); // Получаю из result строку, нахожу на какой позиции находится +, отсекаю от строки первую часть с минусом

        result.textContent = +firstSum - +secondSum;
        resultPast.textContent = `${+firstSum} - ${+secondSum} = ${result.textContent}`;

        firstSum = 0;
        operand = '';
        secondSum = 0;
    } else if (operand === '*') {
        let secondSum = result.textContent.slice(result.textContent.search(/\*/) + 1); // Получаю из result строку, нахожу на какой позиции находится *, отсекаю от строки первую часть с минусом

        result.textContent = +firstSum * +secondSum;
        resultPast.textContent = `${+firstSum} * ${+secondSum} = ${result.textContent}`;

        firstSum = 0;
        operand = '';
        secondSum = 0;
    } else if (operand === '/') {
        let secondSum = result.textContent.slice(result.textContent.search(/\//) + 1); // Получаю из result строку, нахожу на какой позиции находится /, отсекаю от строки первую часть с минусом

        result.textContent = (+firstSum / +secondSum).toFixed(2);
        resultPast.textContent = `${+firstSum} / ${+secondSum} = ${result.textContent}`;

        firstSum = 0;
        operand = '';
        secondSum = 0;
    }
})

darkTheme.addEventListener('click', (e) => {
    const body = document.querySelector('body'),
        nav = document.querySelector('nav'); 

    Array.from(btns.children).forEach(item => {
        item.style.color = 'white';
        item.style.borderColor = '#f59517';
    })
    result.parentElement.style.borderColor = '#f59517'
    result.style.color = 'white';
    body.style.background = 'black';
    nav.style.background = '#f59517';
    darkTheme.style.display = 'none';
    lightTheme.style.display = 'block';
})

lightTheme.addEventListener('click', (e) => {
    const body = document.querySelector('body'),
        nav = document.querySelector('nav'); 

    Array.from(btns.children).forEach(item => {
        item.style.color = 'black';
        item.style.borderColor = '#ffbef5';
    })
    result.parentElement.style.borderColor = '#ffbef5'
    result.style.color = 'black';
    body.style.background = 'white';
    nav.style.background = '#ffbef5';
    darkTheme.style.display = 'block';
    lightTheme.style.display = 'none';
})