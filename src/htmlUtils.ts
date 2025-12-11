import type { SlStop } from "./models/SlStop";

export const createHtml = (stops: SlStop["locations"]) => {
  const stopsSection = document.getElementById("stops");
  if (!stopsSection) return;

  stopsSection.innerHTML = "";

  stops.slice(0, 3).forEach((stop) => {
    const stopContainer = document.createElement("div");
    const name = document.createElement("h2");
    name.innerHTML = stop.name;

    stopContainer.appendChild(name);
    stopsSection.appendChild(stopContainer);
  });
};
