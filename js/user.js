class User {
    static init(user) {
        return fetch('https://user-list-2022-default-rtdb.firebaseio.com/user.json', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(recordDataBase => recordDataBase.json())
            .then(recordDataBase => {
                user.id = recordDataBase.name;
                return user;
            })
            .then(addToLocalStorage)
            .then(User.renderList)
    };

    static renderList() {
        const userList = getUserListFromLocalStorage();
        const clean = userList.length ? cleanUserCard() : getMessage();
        const userCard = userList.length ? userList.map(toUserCard).join('') : getMessage();
    };
};

function addToLocalStorage(user) {
    const userList = getUserListFromLocalStorage();
    userList.push(user);
    localStorage.setItem('users', JSON.stringify(userList));
};

function getUserListFromLocalStorage() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function cleanUserCard() {
    const userListContainer = document.querySelector('.list-container');
    const userCard = userListContainer.querySelectorAll('.user-card');
    userCard.forEach(element => {
        element.remove();
    });
};

function toUserCard(user) {
    const userListContainer = document.querySelector('.list-container');
    const userCard = document.createElement('div');
    userListContainer.appendChild(userCard);
    userCard.classList.add('user-card');
    userCard.innerHTML = `${user.name}, ${user.age} age`;
    return userCard;
}

function getMessage() {
    const userListContainer = document.querySelector('.list-container');
    const messageCard = document.createElement('div');
    userListContainer.appendChild(messageCard);
    messageCard.classList.add('message-card');
    messageCard.innerHTML = 'Enter your name and age...';
}

export { User };