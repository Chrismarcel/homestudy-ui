// Begin handling modal toggle events

if (location.pathname === '/') {
    document.querySelector('#begin').addEventListener('click', function (event) {
        if (event.target.id === 'begin') {
            document.querySelector('.modal').classList.remove('modal--close');
            document.querySelector('.modal').classList.add('modal--open');
            document.getElementById('overlay').style.display = 'block';
        }
    });
    document.getElementById('profile-icon').style.display = 'none';

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
        document.querySelector('.header__btn').setAttribute('href', './classroom.html');
        document.querySelector('.header__btn').removeAttribute('id');
        document.querySelectorAll('.content__header')[1].innerText = 'Why Use This Curriculum';
        document.getElementById('profile-icon').style.display = 'inline-block';
    });
}

const closeModal = () => {
    document.querySelector('.modal').classList.remove('modal--open');
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.modal').classList.add('modal--close');
}