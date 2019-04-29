// Version ES6 import {} from '';
import { user, showMyHobbies } from './data.js';


// Display HTML code with a JavaScript function
function addTextInHtml(baliseHtml, infoUser) {

    document.querySelector(baliseHtml).textContent = infoUser;
}

addTextInHtml('.school1', user.school1);
addTextInHtml('.label1', user.label1);

addTextInHtml('.school2', user.school2);
addTextInHtml('.label2', user.label2);

addTextInHtml('.school3', user.school3);
addTextInHtml('.label3', user.label3);


// Display HTML code with a JavaScript loop for the section point of interests
showMyHobbies.forEach((value, key) => {

    console.log(value);
    addTextInHtml(key, value);

});

// Display the year in the Footer section
function showFullYear() {
    const year = new Date();
    addTextInHtml(year.getFullYear());
}

showFullYear('.showYear');

