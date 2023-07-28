import { getCargo } from "./database.js";

export const cargoList = () => {
  const cargoShips = getCargo();

  let cargoHTML = "<ul>";

  for (const ship of cargoShips) {
    cargoHTML += `<li>${ship.shipName}</li>`;
  }

  cargoHTML += "</ul>";

  return cargoHTML;
};
