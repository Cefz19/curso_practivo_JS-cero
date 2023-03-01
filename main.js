// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('parrafito');
// const pid = document.querySelector('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });


// h1.innerHTML = 'Patito <br> Free';
// h1.innerText = 'Paton <br> Free';

// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class','yellow');

// h1.classList.add('rojo');
// h1.classList.remove('blue');

// // h1.classList.toggle('blue');
// // h1.classList.contains('blue');

// input.value="567"

// const img = document.createElement('img'); 
// img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
// console.log(img);



// pid.innerHTML = " ";
// pid.appendChild(img);

const form = document.querySelector('#form');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputValue);

// btn.addEventListener('click', btnOnClick);


function sumarInputValue(event){
   // console.log({event});
   event.preventDefault();
   const sumaInpust = input1.value + input2.value;
   pResult.innerText = "Resultado" + sumaInpust;
}

// function btnOnClick(){
//    const sumaInpust = input1.value + input2.value;
//    pResult.innerText = "Resltado" + sumaInpust;
// }