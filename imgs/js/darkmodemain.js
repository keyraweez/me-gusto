menu__btn.addEventListener('click',darkmode);
menu__btn.addEventListener('click',lightmode);
menu__btn_adapt.addEventListener('click',lightmode);
menu__btn_adapt.addEventListener('click',lightmode);
function darkmode(){
    document.getElementById('head').style.background = 'black';
    document.getElementById('feat').style.background = '#000';
    document.getElementById('mainblock').style.background = '#000';
    document.getElementById('footer__body').style.background = '#000';
    document.body.style.background = '#222';
}
function lightmode(){
    document.getElementById('head').style.background = '#cb2b2b';
    document.getElementById('feat').style.background = '#cb2b2b';
    document.getElementById('mainblock').style.background = '#cb2b2b';
    document.getElementById('footer__body').style.background = '#cb2b2b';
    document.body.style.background = "#e4ecff";
}