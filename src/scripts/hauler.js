import { getHaulers, getCargo } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "hauler") {
    const haulerId = itemClicked.dataset.id;
    let shipCounter = 0;
    const cargoShips = getCargo();
    for (const ship of cargoShips) {
      if (ship.haulerId === parseInt(haulerId)) {
        shipCounter++;
      }
    }
    window.alert(`This hauler is carrying ${shipCounter} cargo ships`);
  }
});

export const haulerList = () => {
  const haulers = getHaulers();

  let haulersHTML = "<ul>";

  for (const hauler of haulers) {
    haulersHTML += `<li data-id="${hauler.id}" data-type="hauler">${hauler.shipName}</li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};
