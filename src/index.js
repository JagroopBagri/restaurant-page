import { loadHome } from './homePage';
import { loadAbout } from './aboutPage';
import { loadContact} from './contactPage';
import { loadMenu } from './menuPage';

loadHome();
function switchTab(){
    let organics = document.querySelector('h1');
    organics.addEventListener('click', function (){
        loadHome();
    }); 
    let menu = document.querySelector('.menu');
    menu.addEventListener('click', function(){
        loadMenu();
    })
    let about= document.querySelector('.about');
    about.addEventListener('click', function(){
        loadAbout();
    })
    let contact = document.querySelector('.contact');
    contact.addEventListener('click', function(){
        loadContact();
    })
};
switchTab();