// function that loads about page

function loadAbout(){
    let divs = document.querySelectorAll('div');
    let images = document.querySelectorAll('img');
    for (let n = 1; n < images.length - 1; n++){
        images[n].remove();
    };
    for(let n = 3; n < divs.length; n++){
        divs[n].remove();
    };
    let content = document.querySelector('#content');
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
                times.textContent = "MON: 8am to 5pm\r\nTUE: 8am to 5pm\r\nWED: 8am to 5pm\r\nTHU: 8am to 5pm\r\nFRI: 8am to 5pm\r\nSAT: 10am to 8pm\r\nSUN: CLOSED";
                hours.appendChild(times);
                const footer = document.querySelector('.footer')
                const currentYear = new Date().getFullYear();
                footer.textContent = 'Copyright © ' + currentYear + ' Jagroop Bagri'
};

export { loadAbout };