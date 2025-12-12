<<<<<<< HEAD
import './style.css'

const response = await fetch ("https://journeyplanner.integration.sl.se/v2/system-info");
const data = await response.json();

console.log(data);
=======
// const response = await fetch("https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any");
// const data = await response.json();

// console.log("Request data:", data);

import { createHtml } from "./htmlUtils";
import { getStops } from "./services/slService";
import "./style.css";

const mapFrame = document.getElementById("map") as HTMLIFrameElement;

export const showMap = (lat: number, lon: number): void => {
  if (!mapFrame) return;
  mapFrame.src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
};

navigator.geolocation.getCurrentPosition((pos) => {
  const { latitude, longitude } = pos.coords;
  showMap(latitude, longitude);
});

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("searchText") as HTMLInputElement | null;
  const searchText = input?.value.trim() || "";

  const stops = await getStops(searchText);
  createHtml(stops);

  if (stops.length > 0) {
    const [lat, lon] = stops[0].coord;
    showMap(lat, lon);
  }

  if (input) input.value = "";
});
>>>>>>> f66ff91828383e749e199df83a40d49a2faf7074
