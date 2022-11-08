// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
import './my-scripts/my-scripts.modules.js'
import './map.js'


const empryLinks = Array.from(document.querySelectorAll('a[href="#"]'));
empryLinks.forEach(link => {
    link.setAttribute("data-popup", "#popup-error")
})
// data-popup