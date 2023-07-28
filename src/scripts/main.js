import { dockList } from "./docks.js";
import { haulerList } from "./hauler.js";
import { cargoList } from "./cargo.js";

let dockDisplay = dockList();
let haulerDisplay = haulerList();
let cargoDisplay = cargoList();

const dockHTML = document.querySelector("#dockList");
const haulerHTML = document.querySelector("#haulerList");
const cargoHTML = document.querySelector("#cargoList");

dockHTML.innerHTML = dockDisplay;
haulerHTML.innerHTML = haulerDisplay;
cargoHTML.innerHTML = cargoDisplay;
