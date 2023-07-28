import { getHaulers } from "./database.js";

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  // Was a hauler list item clicked?

  // Get the id of the hauler clicked

  // Start a counter variable at 0

  // Iterate all of the shipping ships

  // Does the haulerId foreign key match the id?

  // Increase the counter by 1
});

export const haulerList = () => {
  const haulers = getHaulers();

  let haulersHTML = "<ul>";

  for (const hauler of haulers) {
    haulersHTML += `<li>${hauler.shipName}</li>`;
  }

  haulersHTML += "</ul>";

  return haulersHTML;
};
