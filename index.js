const user = {

    school1: 'White Rabbit',
    label1: 'Formation intensive de cours de développment web spécialisé dans l\'environnement Javascript',
    school2: 'O\'clock',
    label2: 'Formation Développeur  web en ligne',
    school3: 'WEBFORCE3 - Développement web',
    label3: 'Introduction au métier de Développeur web',
    experience1: 'Développeur Front-end en tant que micro-entrepreneur',
    labelExperience1: 'Début d\'activité en tant que profession libérale dans les métiers du web',
    centerInterest: 'Sports, Cuisiner, Nouvelles technologies'
};


function addTextInHtml(baliseHtml, infoUser) {

    document.querySelector(baliseHtml).textContent = infoUser;
}

addTextInHtml('.school1', user.school1);
addTextInHtml('.label1', user.label1);

addTextInHtml('.school2', user.school2);
addTextInHtml('.label2', user.label2);

addTextInHtml('.school3', user.school3);
addTextInHtml('.label3', user.label3);




