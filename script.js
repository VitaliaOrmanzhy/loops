const p = document.getElementsByClassName('result');

//объект, куда будут записываться результаты
const results = {};

for (let i = 0; i <= 12; i++) {
    results[i] = [];
}

//1
for (let i = 10; i <= 20; i++) {
    results[0].push(i);
}

//2
for (let i = 10; i <= 20; i++) {
    results[1].push(i ** 2);
}

//3
for (let i = 1; i <= 9; i++) {
    results[2].push(i);
}

//4
for (let i = 1; i < 15; i++) {
    results[3] = i + i++;
}

//5
results[4] = 1;

for (let i = 15; i <= 35; i++) {
    results[4] *= i;
}

//6
results[5] = 0;
for (let i = 1; i <= 500; i++) {
    results[5] += i;
}

results[5] = results[5] / 500;

//7
results[6] = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        results[6] += i;
    }  
}

//8
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        results[7].push(i);
    }
}


//9
let number = 54;
for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
        results[8].push(i);
    }
}

//10
let nums = [];

for (el of results[8]) {
    if (el % 2 === 0) {
        nums.push(el);
    } 
}

results[9] = nums.length;


//11
results[10] = 0;

for (el of nums) {
    results[10] += el;
}

//12

for (let i = 1; i <= 10; i++) {
    for (let j = 2; j <= 10; j++) {
        results[11].push(i * j);
    }
}

//вывести на страницу значения ключей объекта с результатами

for (let i = 0; i < 12; i++) {
    if (typeof results[i] == 'object') {
        p[i].innerHTML = results[i].join(', ');
    } else {
        p[i].textContent = results[i];
    }
}
