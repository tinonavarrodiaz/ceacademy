const totop = document.getElementById('totop');
const Logo = document.getElementById('Logo');
const Header = document.getElementById('main-header');
const screenHeight = window.innerHeight;
const headerHeight = getComputedStyle(
  document.documentElement
).getPropertyValue('--header-height');
if (window.matchMedia('(min-width: 1024px)').matches) {
}

console.log(headerHeight);
totop.addEventListener('click', (e) => {
  e.preventDefault();
  toTop();
});
Logo.addEventListener('click', (e) => {
  e.preventDefault();
  toTop();
});

window.addEventListener('scroll', (e) => {
  let scrollTop = window.scrollY;
  if (scrollTop >= screenHeight * 0.5) {
    totop.classList.add('show');
    if (window.matchMedia('(min-width: 1024px)').matches) {
      document.documentElement.style.setProperty('--header-height', '10vh');
    }
  } else {
    totop.classList.remove('show');
    document.documentElement.style.setProperty('--header-height', headerHeight);
  }
});

function toTop() {
  location.hash = '';
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}
