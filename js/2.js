bnt2 = document.querySelector('.bnt_2');
input1 = document.querySelector('.input1');
input2 = document.querySelector('.input2');
input3 = document.querySelector('.input3');
input4 = document.querySelector('.input4');
back = document.querySelector('.back');

bnt2.onclick = function() {
    input1.value = window.screen.width;
    input2.value= window.screen.height;
    input3.value= window.screen.availWidth;
    input4.value= window.screen.availHeight;
}
