const p = document.getElementsByClassName('result');

//объект, куда будут записываться результаты
const results = {};

for (let i = 0; i <= 12; i++) {
    results[i] = [];
}

//1
for (let i = 20; i <= 30; i += 0.5) {
    results[0].push(i);
}

//2
const dolar = 27;
for (let i = 20; i <= 100; i += 10) {
    results[1].push(i * dolar);
}

//3
let number = 65;
for (let i = 1; i <= 100; i++) {
    if (i ** 2 <= number) {
        results[2].push(i);
    }  
}

//4
let number2 = 7;

results[3] = (function IsTheNumSimple() {
    for (let i = 2; i < number2; i++) {
        if (number2 % i !== 0) {
            return true;
        }
    }
})()

//5
let number3 = 9;

results[4] = (function canWeGeTheNumByRaisingToAPower() {
    for (let i = 1; i < number3; i++) {
        if ((3 ** i) === number3) {
            return true;
        }
    }
})();


//вывести на страницу значения ключей объекта с результатами

for (let i = 0; i < 12; i++) {
    if (typeof results[i] == 'object') {
        p[i].innerHTML = results[i].join(', ');
    } else {
        p[i].textContent = results[i];
    }
}
