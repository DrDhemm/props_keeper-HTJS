let nav = document.getElementsByTagName('nav')[0];
let body = document.getElementsByTagName('body')[0];
let credit = document.getElementById('credit');
let creditmodal = document.getElementsByClassName('creditsmodal')[0];
let modal = document.getElementsByClassName('modal')[0];
let close = document.getElementsByClassName('close')[0];
let lastScrollTop = 0;

window.onscroll = function (e) {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    nav.style.backgroundColor = 'rgba(36, 41, 41, 0.8)';
    nav.style.top = '-100%';
    nav.style.fontSize = 'clamp(0.8rem, 0.5000rem + 0.6250vw, 1.5rem)';
  } else {
    nav.style.top = '0%';
  }

  if (st === 0) {
    nav.style.backgroundColor = 'transparent';
    nav.style.fontSize = 'clamp(1rem, 0.7857rem + 0.4464vw, 1.5rem)';
  }
  lastScrollTop = st;
};

function closeModal(e) {
  e.preventDefault();

  modal.style.opacity = 0;

  setTimeout(() => {
    creditmodal.style.display = 'none';
    body.style.overflowY = 'scroll';
  }, 400);
}

credit.addEventListener('click', (e) => {
  e.preventDefault();

  body.style.overflowY = 'hidden';
  creditmodal.style.display = 'flex';

  setTimeout(() => {
    modal.style.opacity = 1;
  }, 250);
});

close.addEventListener('click', (e) => closeModal(e));
creditmodal.addEventListener('click', (e) => {
  e.target.className === 'creditsmodal' && closeModal(e);
});
