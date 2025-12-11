// const response = await fetch("https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any");
// const data = await response.json();

// console.log("Request data:", data);

import { createHtml } from "./htmlUtils";
import { getStops } from "./services/slService";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const input = document.getElementById("searchText") as HTMLInputElement;
  if (!input.value) return;

  const stops = await getStops(input.value);
  createHtml(stops);

  input.value = "";
});

