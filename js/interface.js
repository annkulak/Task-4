function getInterfaceContainer() {
    const interfaceContainer = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', interfaceContainer);
    interfaceContainer.classList.add('interface-container', 'interface-dark');
};

function getUserPage() {
    const userPage = document.createElement('section');
    document.querySelector('.interface-container').appendChild(userPage);
    userPage.classList.add('user-page', 'form-addition');
};

function getUserForm() {
    const formContainer = document.createElement('form');
    document.querySelector('.form-addition').appendChild(formContainer);
    formContainer.classList.add('form-container');

    getInputTextGroup();
    getInputNumberGroup();
    getSubmitBtn();
};

function getInputTextGroup() {
    const inputTextGroup = document.createElement('div');
    document.querySelector('.form-container').appendChild(inputTextGroup);
    inputTextGroup.classList.add('input-container', 'user-name-container');

    const inputName = document.createElement('div');
    inputTextGroup.appendChild(inputName);
    inputName.classList.add('input-group-name');
    inputName.innerHTML = 'name';

    const inputText = document.createElement('input');
    inputTextGroup.appendChild(inputText);
    inputText.type = 'text';
    inputText.name = 'username';
    inputText.maxLength = 50;
    inputText.classList.add('input-user-name');
};

function getInputNumberGroup() {
    const inputNumberGroup = document.createElement('div');
    document.querySelector('.form-container').appendChild(inputNumberGroup);
    inputNumberGroup.classList.add('input-container', 'user-age-container');

    const inputName = document.createElement('div');
    inputNumberGroup.appendChild(inputName);
    inputName.classList.add('input-group-name');
    inputName.innerHTML = 'age';

    const inputNumber = document.createElement('input');
    inputNumberGroup.appendChild(inputNumber);
    inputNumber.type = 'number';
    inputNumber.name = 'age';
    inputNumber.maxLength = 3;
    inputNumber.classList.add('input-user-age');
};

function getSubmitBtn() {
    const submitBtnContainer = document.createElement('div');
    document.querySelector('.form-container').appendChild(submitBtnContainer);
    submitBtnContainer.classList.add('input-container', 'submit-button-container');

    const submitBtn = document.createElement('input');
    submitBtnContainer.appendChild(submitBtn);
    submitBtn.type = 'submit';
    submitBtn.name = 'save';
    submitBtn.value = 'save';
    submitBtn.disabled = true;
    submitBtn.classList.add('submit-button');
};

function getUserList() {
    const listContainer = document.createElement('div');
    document.querySelector('.user-page').appendChild(listContainer);
    listContainer.classList.add('list-container');

    const listName = document.createElement('div');
    listContainer.appendChild(listName);
    listName.classList.add('list-name');
    listName.innerHTML = 'user list:';
};

function getInterface() {
    getInterfaceContainer()
    getUserPage();
    getUserForm();
    getUserList();
};

export { getInterface };