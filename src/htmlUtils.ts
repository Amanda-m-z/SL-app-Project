import type { SlStop } from "./models/SlStop";

export const createHtml = (stops: SlStop[]) => {
  const stopsSection = document.getElementById("stops");
  if (stopsSection) stopsSection.innerHTML = "";

  stops.forEach((stop) => {
    const stopContainer = document.createElement("div");
    stopContainer.className = "stop";

    const title = document.createElement("h2");
    title.innerText = stop.name;

    const coords = document.createElement("p");
    coords.innerText = `Lat: ${stop.coord[0]}, Lon: ${stop.coord[1]}`;

    stopContainer.appendChild(title);
    stopContainer.appendChild(coords);

    stopsSection?.appendChild(stopContainer);
  });
};
