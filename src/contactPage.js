// function that loads contact page

function loadContact(){
    let divs = document.querySelectorAll('div');
    let images = document.querySelectorAll('img');
    for (let n = 1; n < images.length; n++){
        images[n].remove();
    }
    for(let n = 3; n < divs.length; n++){
        divs[n].remove();
    };
    let content = document.querySelector('#content');
        let body2 = document.createElement('div');
        body2.classList.add('body2');
        content.appendChild(body2);
            let nameLabel = document.createElement('label');
            nameLabel.htmlFor = 'name';
            nameLabel.textContent = 'Name';
            body2.appendChild(nameLabel);
            let nameInput = document.createElement('input');
            nameInput.type = 'text';
            nameInput.id = 'name';
            nameInput.name = 'name';
            body2.appendChild(nameInput);
            let emailLabel = document.createElement('label');
            emailLabel.htmlFor = 'email';
            emailLabel.textContent = 'Email';
            body2.appendChild(emailLabel);
            let emailInput = document.createElement('input');
            emailInput.type = 'text';
            emailInput.id = 'email';
            emailInput.name = 'email';
            body2.appendChild(emailInput);
            let messageLabel = document.createElement('label');
            messageLabel.htmlFor = 'message';
            messageLabel.textContent = 'Message';
            body2.appendChild(messageLabel);
            let messageInput = document.createElement('textarea');
            messageInput.id = 'message';
            messageInput.name = 'message';
            body2.appendChild(messageInput);
            let submitButton = document.createElement('button');
            submitButton.type = 'button';
            submitButton.textContent = 'Submit';
            body2.appendChild(submitButton);
};

export { loadContact };