const $navBtn = document.querySelector('.js-nav-btn');
const $navContent = document.querySelector('.js-nav-content');

$navBtn.addEventListener('click', function () {
  $navBtn.classList.toggle('is-open');
  $navContent.classList.toggle('is-open');
});
