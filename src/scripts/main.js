import { dockList } from "./docks.js";
import { haulerList } from "./hauler.js";

let dockDisplay = dockList();
let haulerDisplay = haulerList();

const dockHTML = document.querySelector("#dockList");
const haulerHTML = document.querySelector("#haulerList");

dockHTML.innerHTML = dockDisplay;
haulerHTML.innerHTML = haulerDisplay;
