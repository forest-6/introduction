//dom
let body = document.querySelector('body')
let text = document.querySelectorAll('a');
let darkBtn = document.querySelector('.darkBtn');
let moonBtn = document.querySelector('#moonBtn');
let dark_LS = localStorage.getItem('dark_LS');
//다크모드
function setDarkMode(){
    for ( let i = 0; i < text.length; i++ ) {
        text[i].style.color = 'white';
    }
    darkBtn.style.color="white";
    moonBtn.className="fa-solid fa-sun";
    body.classList.add("darkMode");
    localStorage.setItem('dark_LS', 'dark');
};
//라이트모드
function setLightMode(){
    for ( let i = 0; i < text.length; i++ ) {
        text[i].style.color = 'black';
    }    
    darkBtn.style.color="black";
    moonBtn.className="fa-solid fa-moon";
    body.classList.remove("darkMode");
    localStorage.setItem('dark_LS', null);
};
//item값이 dark로 저장된 상태로 리로드하면 다시 다크모드를 실행시킨다.
if (dark_LS === 'dark') setDarkMode();

darkBtn.addEventListener('click', () => {
//클릭시 마다 초기화한다.
//클릭하면 전상태의 값이 불러져온다.

console.log(dark_LS);
    if (dark_LS !== 'dark') {    
        setDarkMode();
    } else {
        setLightMode();
    }
});

