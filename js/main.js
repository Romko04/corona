const btn = document.querySelector('.icon__menu');
const menuBody = document.querySelector('.menu__body');
console.log(menuBody);
btn.addEventListener('click', mouseclick);
function mouseclick() {
    menuBody.classList.toggle('_active');
    btn.classList.toggle('_active');
}
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });