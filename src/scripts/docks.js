import { getDocks, getHaulers } from "./database.js";

export const dockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li data-type="dock" data-name="${dock.docLoc}" data-id="${dock.id}">${dock.docLoc}</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  const haulers = getHaulers();
  let dockedShips = `The ${itemClicked.dataset.name} dock is currently unloading `;
  const dockId = itemClicked.dataset.id;
  if (itemClicked.dataset.type === "dock") {
    let dockedList = [];
    for (const hauler of haulers) {
      if (parseInt(dockId) === hauler.dockId) {
        dockedList.push(hauler.shipName);
      }
    }
    if (dockedList.length === 0) {
      window.alert(
        `The ${itemClicked.dataset.name} dock is currently unloading nothing.`
      );
      return;
    } else {
      dockedShips += dockedList.join(", ");
      dockedShips += ".";

      window.alert(dockedShips);
    }
  }
});
