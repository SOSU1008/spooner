function navScroll() {
    const ScrollChk = window.scrollY || document.documentElement.scrollTop;
    const setScroll = document.querySelector('#root').classList;
    ScrollChk <= 0 ? setScroll.remove('nav-fixed') : setScroll.add('nav-fixed');
}

function mobileNavToggle() {
    const headerItem = document.querySelector('header');
    (headerItem.classList.value.indexOf('mobile-nav') !== -1) ? headerItem.classList.remove('mobile-nav') : headerItem.classList.add('mobile-nav');
}

window.addEventListener('scroll', function () {
    navScroll();
});