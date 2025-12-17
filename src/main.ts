import { createHtml } from "./htmlUtils";
import { getStops } from "./services/slService";
import "./style.css";

const mapFrame = document.getElementById("map") as HTMLIFrameElement;
const showTheStop = document.getElementById("showResult");

export const showMap = (lat: number, lon: number): void => {
  if (!mapFrame) return;
  mapFrame.src = `https://maps.google.com/maps?q=${lat},${lon}&z=15&output=embed`;
};

navigator.geolocation.getCurrentPosition((pos) => {   //Hämta nuvarande position
  const { latitude, longitude } = pos.coords;
  showMap(latitude, longitude);
});

//Knapp för användare att skriva in position
document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = document.getElementById("searchText") as HTMLInputElement | null;
  const searchText = input?.value.trim() || "";
  if (searchText.length > 0){
    if (showTheStop) showTheStop.className = "Show";

  }
  

  const stops = await getStops(searchText);
  createHtml(stops);

  if (stops.length > 0) {
    const [lat, lon] = stops[0].coord;
    showMap(lat, lon);
  }

  if (input) input.value = "";
});


