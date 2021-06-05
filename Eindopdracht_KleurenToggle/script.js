const bodyElement = document.querySelector('#main');
const hamburgerElement = document.querySelector('#hamburger-menu');
const navListElement = document.querySelector('#nav-list');

const homeButton = document.querySelector('.home-btn');
const redButton = document.querySelector('.red-color');
const orangeButton = document.querySelector('.orange-color');
const greenButton = document.querySelector('.green-color');
const blueButton = document.querySelector('.blue-color');

const colorClasses = ['blue-color', 'orange-color', 'red-color', 'green-color'];

const clearColorClassesFromBody = () => {
    for (let colorClass of colorClasses) {
        bodyElement.classList.remove(colorClass);
    }
};

const addColorToBody = (colorClass) => {
    bodyElement.classList.add(colorClass);
};

const backToHome = () => {
    clearColorClassesFromBody()
    navListElement.classList.toggle('hidden');
};
const changeToRed = () => {
    clearColorClassesFromBody()
    addColorToBody('red-color');
    navListElement.classList.toggle('hidden');
};
const changeToOrange = () => {
    clearColorClassesFromBody()
    addColorToBody('orange-color');
    navListElement.classList.toggle('hidden');
};
const changeToGreen = () => {
    clearColorClassesFromBody()
    addColorToBody('green-color');
    navListElement.classList.toggle('hidden');
};
const changeToBlue = () => {
    clearColorClassesFromBody()
    addColorToBody('blue-color');
    navListElement.classList.toggle('hidden');
};

homeButton.addEventListener('click', backToHome);
redButton.addEventListener('click', changeToRed);
orangeButton.addEventListener('click', changeToOrange);
greenButton.addEventListener('click', changeToGreen);
blueButton.addEventListener('click', changeToBlue);
hamburgerElement.addEventListener('click', () => {
    navListElement.classList.toggle('hidden');
});