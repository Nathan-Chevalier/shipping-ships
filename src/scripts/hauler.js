import { getHaulers } from "./database.js";

export const haulerList = () => {
  const haulers = getHaulers();

  let haulersHTML = "<ul>";

  for (const hauler of haulers) {
    haulersHTML += `<li>${hauler.shipName}</li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};
