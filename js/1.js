// Так из коллекции содержимое html можно создать массив
// const nodes = Array.from(document.body.childNodes);
// console.log(nodes);
// function eventFirst() {
//     alert('Hello');
// }

// function eventSecond() {
//     alert('World');
// }
//  let bnt = document.querySelector('.bnt');
//  bnt.addEventListener('click', eventFirst);
//  bnt.addEventListener('click', eventSecond);
// let timer = document.querySelector('.int');
// function getCount() {
//     let count = 0;
//     return function() {
//         timer.value = ++count;
//     }
// };

// let counter = getCount();
// let time = setInterval(counter, 1000);
// let stop = document.querySelector('#stop');
// function stopTimer() {
//     clearInterval(time);
// };
// stop.addEventListener('click', stopTimer);

// document.querySelector('a').onclick = function() {
//     alert('a');
//     event.preventDefault();
// }

// document.querySelector('#send').onclick = function() {
//     event.preventDefault();
// }
// function first() {
//     alert('Hello')
// }
aera = document.querySelector('#area');
bnt = document.querySelector('.bnt');
bnt.onclick=function() {
    aera.innerHTML=(navigator.appVersion);
};
