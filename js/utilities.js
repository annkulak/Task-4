function userNameValied(nameValue) {
    return nameValue.length >= 2;
};

function userAgeValied(ageValue) {
    if ((ageValue >= 0) && (ageValue <= 130) && (ageValue != '')) {
        return ageValue.toString().length <= 3;
    };
};

export { userNameValied, userAgeValied };