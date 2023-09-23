"use strict";
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e.currentTarget.type.value, tofrom.value, details.value, amount.value);
});
