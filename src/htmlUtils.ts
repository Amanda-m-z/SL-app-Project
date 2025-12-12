import { showMap } from "./main";

export const createHtml = (stops) => {
  const stopsSection = document.getElementById("stops");
  if (!stopsSection) return;

  stopsSection.innerHTML = "";

  stops.slice(0, 3).forEach((stop) => {
    const stopContainer = document.createElement("div");
    stopContainer.classList.add("stop-item");

    const name = document.createElement("h2");
    name.textContent = stop.name;

    stopContainer.appendChild(name);

    stopContainer.addEventListener("click", () => {
      const [lat, lon] = stop.coord;
      showMap(lat, lon);  
    });

    stopsSection.appendChild(stopContainer);
  });
};
