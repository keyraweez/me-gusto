function darkmode(){
    document.getElementById('pizza').style.background = 'black';
    document.getElementById('rolls').style.background = 'black';
    document.getElementById('drinks').style.background = 'black';
    document.getElementById('salts').style.background = 'black';
    document.getElementById('head').style.background = 'black';
    document.body.style.background = "#222";
}
function lightmode(){
    document.getElementById('pizza').style.background = '#222';
    document.getElementById('rolls').style.background = '#222';
    document.getElementById('drinks').style.background = '#222';
    document.getElementById('salts').style.background = '#222';
    document.getElementById('head').style.background = '#cb2b2b';
    document.body.style.background = "#e4ecff";
}
menu__btn.addEventListener('click',darkmode);
menu__btn.addEventListener('click',lightmode);





































// function darkmode(){
//     document.body.style.background = "#222222";
//     document.getElementById("head").style.background ='#861d1d';
//     document.getElementById("head_adapt").style.background ='#861d1d';
//     document.getElementById("page4").style.background ='#861d1d';
//     document.getElementById("mainblock").style.background ='#861d1d';
//     document.getElementById("feat").style.background ='#861d1d';
//     document.getElementById("accept").style.background ='#222222';
// }
// function lightmode(){
//     document.body.style.background = "#e4ecff";
//     document.getElementById("head").style.background ='#cb2b2b';
//     document.getElementById("head_adapt").style.background ='#cb2b2b';
//     document.getElementById("page4").style.background ='#cb2b2b';
//     document.getElementById("mainblock").style.background ='#cb2b2b';
//     document.getElementById("feat").style.background ='#cb2b2b';
//     document.getElementById("accept").style.background ='#e4ecff';
// }
// btn__menu_black.addEventListener("click", darkmode);
// bnt__menu_white.addEventListener("click", lightmode);
// menu__btn_black.addEventListener("click", darkmode);
// menu__btn_white.addEventListener("click", lightmode);

// let head = document.head,
// link = document.createElement('link');
//   link.rel = 'stylesheet';
//   // Проверка значения. Если dark-theme то будет темная тема
//   if (localStorage.getItem('themeStyle') === 'dark') {
//     link.href = '/assets/css/dark-theme.css'; // ссылка на темную тему
//     document.getElementById('switch-dark').setAttribute('checked', true); // переключаем чекбокс в положение "темная тема"
//   }

//   else {
//     link.href = '/assets/css/white-theme.css'; // ссылка на светлую тему
//   }
//   head.appendChild(link); // вставляем <link rel="stylesheet" href="light-theme|/assets/css/dark-theme.css">

//   // событие при переключении чекбокса
//   document.getElementById('switch-dark').addEventListener('change', ev => {
//     let btn = ev.target;
//     // если чекбокс включен
//     if (btn.checked) {
//       link.href = '/assets/css/dark-theme.css'; // включаем темную тему
//       localStorage.setItem('themeStyle', 'dark'); // записываем значение в localStorage
//     }
//     else {
//       link.href = '/assets/css/white-theme.css'; // включаем светлую тему
//       localStorage.setItem('themeStyle', 'light'); // записываем значение в localStorage
//     }
//   });

