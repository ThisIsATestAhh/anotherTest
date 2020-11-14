const splashScreen = document.querySelector('.splash-screen');

document.addEventListener('DOMContentLoaded', (e)=>{
    setTimeout(()=>{
        splashScreen.classList.add('display-none');
    }, 4000);
})