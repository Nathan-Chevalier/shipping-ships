import { getCargo, getHaulers } from "./database.js";
const cargoShips = getCargo();
const haulers = getHaulers();

export const cargoList = () => {
  let cargoHTML = `<ul style="column-count:3;">`;

  for (const ship of cargoShips) {
    cargoHTML += `<li data-haulerid="${ship.haulerId}" data-type="cargoShip" data-name="${ship.shipName}">${ship.shipName}</li>`;
  }

  cargoHTML += "</ul>";

  return cargoHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.dataset.type === "cargoShip") {
    let haulerId = itemClicked.dataset.haulerid;
    // Define a placeholder name for the hauling ship
    let haulingShip = { name: "Incorrect" };
    for (const ship of haulers) {
      if (ship.id === parseInt(haulerId)) {
        haulingShip = { name: `${ship.shipName}` };
        window.alert(
          `${itemClicked.dataset.name} is being hauled by ${haulingShip.name}`
        );
      }
    }
  }
});
