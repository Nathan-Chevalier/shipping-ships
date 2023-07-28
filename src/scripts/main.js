import { dockList } from "./docks.js";

let dockDisplay = dockList();

const dockHTML = document.querySelector("#dockList");

dockHTML.innerHTML = dockDisplay;
