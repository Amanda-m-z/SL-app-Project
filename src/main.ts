// const response = await fetch("https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any");
// const data = await response.json();

// console.log("Request data:", data);

import { createHtml } from "./htmlUtils";
import { getStops } from "./services/slService";
import "./style.css";

document.getElementById("searchForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const theInput = document.getElementById("searchText") as HTMLInputElement | null;
  const searchText = theInput?.value || "";

  const stops = await getStops(searchText);
  createHtml(stops);

  if (theInput) theInput.value = "";
});
