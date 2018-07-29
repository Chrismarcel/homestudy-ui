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

// Simulate user activation
document.querySelector('#submit-email').addEventListener('click', function (event) {
    event.preventDefault();
    closeModal();
    document.querySelector('.header__btn').childNodes[0].nodeValue = 'Classroom';
    document.querySelectorAll('.content__header')[1].innerText = 'Why Use This Curriculum';
    document.getElementById('profile-icon').style.display = 'inline-block';
});

const closeModal = () => {
    document.querySelector('.modal').classList.remove('modal--open');
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.modal').classList.add('modal--close');
}