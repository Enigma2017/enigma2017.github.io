//1. Узнать, сколько элементов в документе
const elementsAll = document.querySelectorAll('*').length;
console.log(elementsAll);

//2. Узнать, сколько элементов div
const elementsDiv = document.querySelectorAll('div').length;
console.log(elementsDiv);

//3. Узнать, сколько элементов не div
let elements = document.querySelectorAll('*');
let el = elements.filter((e) => e === 'div');
console.log(el.length);

//4. Сделать все p красным цветом
const elemP = document.querySelectorAll('p');
for(let i=0; i < elemP.length; i++){
    elemP[i].style.color = 'FF00FF';
}
