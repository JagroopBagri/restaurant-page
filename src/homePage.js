// function that loads home page

function loadHome(){
    let content = document.querySelector('#content');
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
                links.appendChild(menu);
                let about = document.createElement('li');
                about.textContent = 'About';
                links.appendChild(about);
                let contact = document.createElement('li');
                contact.textContent = 'Contact';
                links.appendChild(contact);
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
            let homepagePics = document.createElement('div');
            homepagePics.classList.add('homePagePics');
            body.appendChild(homepagePics);
                let homeImage = document.createElement('img');
                homeImage.src = '/images/fruitsAndVegetables.jpeg';
                homeImage.classList.add('pic1');
                homeImage.width = '550';
                homepagePics.appendChild(homeImage);
};

export { loadHome };