import { getInterface } from './interface.js';
import { userNameValied, userAgeValied } from './utilities.js';
import { User } from './user.js';

getInterface();

const form = document.querySelector('.form-container');
const userName = form.querySelector('.input-user-name');
const userAge = form.querySelector('.input-user-age');
const submitBtn = form.querySelector('.submit-button');

form.addEventListener('input', () => {
    submitBtn.disabled = !(userNameValied(userName.value) && userAgeValied(userAge.value));
});

form.addEventListener('submit', submitUserData);

function submitUserData(event) {
    event.preventDefault();

    if ((userNameValied(userName.value)) && (userAgeValied(userAge.value))) {
        const user = {
            name: userName.value.trim(),
            age: userAge.value,
            date: new Date().toJSON(),
        };

        submitBtn.disabled = true;

        User.init(user).then(() => {
            userName.value = '';
            userAge.value = '';
            submitBtn.disabled = false;
        });
    };
};