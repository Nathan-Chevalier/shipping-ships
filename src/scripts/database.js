const database = {
  docks: [
    { id: 1, docLoc: "Shanghai, China", maxCap: "43.5" },
    { id: 2, docLoc: "Busan, South Korea", maxCap: "21.6" },
    { id: 3, docLoc: "Rotterdam, The Netherlands", maxCap: "14.35" },
    { id: 4, docLoc: "Antwerp, Belgium", maxCap: "12.04" },
  ],
};

export const getDocks = () => {
  return database.docks.map((docks) => ({ ...docks }));
};
