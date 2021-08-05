import House from './House.js';
import "./assets/styles/style.css";
import "./assets/styles/style_1.css";
import stormtrooperImage from "./assets/images/stormtrooper.png";

const house = new House(9, 8, 2);

house.getInfo();

const img = document.createElement("img");
img.src = stormtrooperImage;
document.body.appendChild(img);