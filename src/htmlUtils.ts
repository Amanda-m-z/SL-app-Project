import type { SlStop } from "./models/SlStop";

export const createHtml = (stops: SlStop) => {
  const stopsSection = document.getElementById("stops");
  if (!stopsSection) return;
    stopsSection.innerHTML = "";
    
  stops.StopLocation.slice(0, 3).forEach((stop: any) => {
    const stopContainer = document.createElement("div");
    const name = document.createElement("h2");
    name.innerHTML = stop.Name;

    stopContainer.appendChild(name);
    stopsSection?.appendChild(stopContainer);
    });
}

