// Begin handling modal toggle events
const headerBtn = document.querySelector('.header__btn');
headerBtn.addEventListener('click', function () {
    document.querySelector('.modal').classList.remove('modal--close');
    document.querySelector('.modal').classList.add('modal--open');
    document.getElementById('overlay').style.display = 'block';
});

document.querySelector('.modal__close').addEventListener('click', function () {
    closeModal();
});

document.querySelector('#overlay').addEventListener('click', function () {
    closeModal();
});

const closeModal = () => {
    document.querySelector('.modal').classList.remove('modal--open');
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.modal').classList.add('modal--close');
}