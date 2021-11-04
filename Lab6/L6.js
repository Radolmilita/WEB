const text = document.querySelector('.textCHNU').textContent;
const answ = document.querySelector('.answ');
let c = text.replaceAll('Д', 'Н');
answ.textContent = c;