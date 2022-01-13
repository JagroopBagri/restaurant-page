import { loadMenu } from './menuPage';

// function that loads home page

function loadHome(){
    let divs = document.querySelectorAll('div');
    let images = document.querySelectorAll('img');
    for (let n = 1; n < images.length - 1; n++){
        images[n].remove();
    }
    for(let n = 3; n < divs.length; n++){
        divs[n].remove();
    };
    let content = document.querySelector('#content');
    if(document.querySelector('.header') === null){
        let header = document.createElement('div');
        header.classList.add('header');
        content.appendChild(header);
            let logo = document.createElement('div');
            logo.classList.add('logo');
            header.appendChild(logo);
                let mango = document.createElement('img');
                mango.src = '/images/mango.png';
                mango.width = '125';
                logo.appendChild(mango);
                let organics = document.createElement('h1');
                organics.textContent = 'ORGANICS';
                logo.appendChild(organics);
            let links = document.createElement('ul');
            links.classList.add('links');
            header.appendChild(links);
                let menu = document.createElement('li');
                menu.textContent = 'Menu';
                menu.classList.add('menu');
                links.appendChild(menu);
                let about = document.createElement('li');
                about.textContent = 'About';
                about.classList.add('about');
                links.appendChild(about);
                let contact = document.createElement('li');
                contact.textContent = 'Contact';
                contact.classList.add('contact');
                links.appendChild(contact);
    };
        let body = document.createElement('div');
        body.classList.add('body');
        content.appendChild(body);
            let info = document.createElement('div');
            info.classList.add('info');
            body.appendChild(info);
                let enjoy = document.createElement('div');
                enjoy.classList.add('enjoy');
                enjoy.textContent = 'Enjoy snacks & beverages made from 100% natural ingredients sourced from local farmers.'
                info.appendChild(enjoy);
                let menuButton = document.createElement('button');
                menuButton.type = 'button';
                menuButton.textContent = 'Menu';
                info.appendChild(menuButton);
                menuButton.addEventListener('click', () =>
                loadMenu())
            let homepagePics = document.createElement('div');
            homepagePics.classList.add('homePagePics');
            body.appendChild(homepagePics);
                let homeImage = document.createElement('img');
                homeImage.src = '/images/fruitsAndVegetables.jpeg';
                homeImage.classList.add('pic1');
                homeImage.width = '550';
                homepagePics.appendChild(homeImage);
                const footer = document.querySelector('.footer')
const currentYear = new Date().getFullYear();
footer.textContent = 'Copyright © ' + currentYear + ' Jagroop Bagri'
};

export { loadHome };