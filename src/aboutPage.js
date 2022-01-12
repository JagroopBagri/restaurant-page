// function that loads about page

function loadAbout(){
    let divs = document.querySelectorAll('div');
    let images = document.querySelectorAll('img');
    images.forEach(image => image.remove());
    for(let n = 1; n < divs.length; n++){
        divs[n].remove();
    };
    let content = document.querySelector('#content');
        let header = document.createElement('div');
        header.classList.add('header');
        content.appendChild(header);
            let logo = document.createElement('div');
            logo.classList.add('logo');
            header.appendChild(logo);
                let mango = document.createElement('img');
                mango.src = '../images/mango.png';
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
                let aboutText = document.createElement('div');
                aboutText.classList.add('aboutText');
                aboutText.textContent = 'Organics is a family owned establishment dedicated to bringing you natural and organic food. All of our ingredients are sourced from local farmers and are non-GMO. Come enjoy snacks and beverages that are not only tasty, but also healthy!'
                info.appendChild(aboutText);
            let hours = document.createElement('div');
            hours.classList.add('hours');
            body.appendChild(hours);
                let times = document.createElement('div');
                times.classList.add('times');
                times.textContent = "MON: 8am to 5pm\r\nTUE: 8am to 5pm\r\nWED: 8am to 5pm\r\nTHU: 8am to 5pm\r\nFRI: 8am to 5pm\r\nSAT: 10am to 8pm\r\nSUN: Closed";
                hours.appendChild(times);
};

export { loadAbout };