import type { SlLocation } from "./models/SlLocation";

export const createSlHtml = (locations: SlLocation[]) => {
  const container = document.getElementById("movies"); // återanvänd samma section

  if (container) {
    container.innerHTML = "";
  }

  locations.forEach((stop) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");

    title.textContent = stop.name;

    div.appendChild(title);
    container?.appendChild(div);

    div.addEventListener("click", () => {
      console.log("Stop ID:", stop.id);
      console.log("Coordinates:", stop.coord);
      // här kan du sen hämta trips mm.
    });
  });
};
