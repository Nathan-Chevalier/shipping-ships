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
    { id: 3, shipName: "Boats Floats", dockId: 1 },
    { id: 4, shipName: "Tame Imphauler", dockId: 2 },
    { id: 5, shipName: "Slick Idiot", dockId: 1 },
  ],
  cargoShips: [
    { id: 1, shipName: "Amoco Cadiz", haulerId: 1 },
    { id: 2, shipName: "Atlantic Empress", haulerId: 2 },
    { id: 3, shipName: "Castillo de Bellver", haulerId: 3 },
    { id: 4, shipName: "Odyssey", haulerId: 4 },
    { id: 5, shipName: "Exxon Valdez", haulerId: 5 },
    { id: 6, shipName: "ABT Summer", haulerId: 1 },
    { id: 7, shipName: "Sea Empress", haulerId: 2 },
    { id: 8, shipName: "Erika", haulerId: 3 },
    { id: 8, shipName: "Rena", haulerId: 4 },
    { id: 8, shipName: "Sanchi", haulerId: 5 },
  ],
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};

export const getHaulers = () => {
  return database.haulers.map((haulers) => ({ ...haulers }));
};

export const getCargo = () => {
  return database.cargoShips.map((cargoShips) => ({ ...cargoShips }));
};
