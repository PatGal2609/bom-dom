link = document.querySelector(".link");
link.onclick = function () {
  event.preventDefault();
};

result = document.querySelector('#result');
result.onclick=function calc() {
  plus = document.querySelector('#plus').value;
  min = document.querySelector('#min').value;
  if(!isNaN(plus) && !isNaN(min)) {
    let itogo = plus - min;
    document.querySelector('#itogo').value = `${itogo}`;
  }
}
