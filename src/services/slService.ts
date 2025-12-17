// export const get = async (searchText: string) => {
//     const BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=" + searchText + "&any_obj_filter_sf=2&type_sf=any";
//     const response = await fetch(BASE_URL);
//     const data = response.json();
//     return data;
// };

import { get } from "./serviceBase";
import type { SlStop } from "../models/SlStop";

const BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder?";

//Fetch för att hämta stops
export const getStops = async (searchText: string) => {
  const response = await get<SlStop>(`${BASE_URL}name_sf=${searchText}&any_obj_filter_sf=2&type_sf=any`);
  return response.locations;
};
