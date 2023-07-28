import { getDocks } from "./database.js";

export const dockList = () => {
  const docks = getDocks();

  let docksHTML = "<ul>";

  for (const dock of docks) {
    docksHTML += `<li>${dock.docLoc}</li>`;
  }

  docksHTML += "</ul>";

  return docksHTML;
};
