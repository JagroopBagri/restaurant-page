// function that creates menu page

function loadMenu(){
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
            let items = document.createElement('div');
            items.classList.add('items');
            body.appendChild(items);
            let prices = document.createElement('div');
            prices.classList.add('prices');
            body.appendChild(prices);
            // item 1
                let mangoDrink = document.createElement('div');
                mangoDrink.textContent = 'Mango Drink';
                items.appendChild(mangoDrink);
                let mangoPrice = document.createElement('div');
                mangoPrice.textContent = '$6';
                prices.appendChild(mangoPrice);
            // item 2
                let guavaDrink = document.createElement('div');
                guavaDrink.textContent = 'Guava Drink';
                items.appendChild(guavaDrink);
                let guavaPrice = document.createElement('div');
                guavaPrice.textContent = '$6';
                prices.appendChild(guavaPrice);
            // item 3
                let strawberryDrink = document.createElement('div');
                strawberryDrink.textContent = 'Strawberry Drink';
                items.appendChild(strawberryDrink);
                let strawberryPrice = document.createElement('div');
                strawberryPrice.textContent = '$6';
                prices.appendChild(strawberryPrice);
            // item 4
                let mixedNuts = document.createElement('div');
                mixedNuts.textContent = 'Mixed Nuts';
                items.appendChild(mixedNuts);
                let nutsPrice = document.createElement('div');
                nutsPrice.textContent = '$6';
                prices.appendChild(nutsPrice);
            // item 5
                let yogurt = document.createElement('div');
                yogurt.textContent = 'Greek Yogurt with Mixed Berries';
                items.appendChild(yogurt);
                let yogurtPrice = document.createElement('div');
                yogurtPrice.textContent = '$6';
                prices.appendChild(yogurtPrice);
            // item 6
                let cheese = document.createElement('div');
                cheese.textContent = 'Cottage Cheese & Fruit';
                items.appendChild(cheese);
                let cheesePrice = document.createElement('div');
                cheesePrice.textContent = '$6';
                prices.appendChild(cheesePrice);
                const footer = document.querySelector('.footer')
const currentYear = new Date().getFullYear();
footer.textContent = 'Copyright © ' + currentYear + ' Jagroop Bagri'
};

export { loadMenu };