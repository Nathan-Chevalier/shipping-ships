const database = {
  docks: [
    { id: 1, docLoc: "Shanghai, China", maxCap: "43.5" },
    { id: 2, docLoc: "Busan, South Korea", maxCap: "21.6" },
    { id: 3, docLoc: "Rotterdam, The Netherlands", maxCap: "14.35" },
    { id: 4, docLoc: "Antwerp, Belgium", maxCap: "12.04" },
  ],
  haulers: [
    { id: 1, shipName: "Holy Ship", dockId: 3 },
    { id: 2, shipName: "Ima Haul U", dockId: 3 },
    { id: 3, shipName: "Boats Floats", dockId: 4 },
    { id: 4, shipName: "Tame Imphauler", dockId: 2 },
    { id: 5, shipName: "Slick Idiot", dockId: 1 },
  ],
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};

export const getHaulers = () => {
  return database.haulers.map((haulers) => ({ ...haulers }));
};
