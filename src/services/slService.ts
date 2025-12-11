// export const get = async <T>(url: string) => {
//   const response = await fetch(url);
//   const data: T = await response.json();
//   // localStorage.setItem("api-list", JSON.stringify(data));
//   return data;
// };



// export const get = async (searchText: string) => {
//     const BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=" + searchText + "&any_obj_filter_sf=2&type_sf=any";
//     const response = await fetch(BASE_URL);
//     const data = response.json();
//     return data;
// };

import type { SlStop } from "../models/SlStop";
import { get } from "./serviceBase";



const BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder?";

export const getStops = async (searchText: string): Promise<SlStop[]> => {
  const url = `${BASE_URL}name_sf=${encodeURIComponent(searchText)}&any_obj_filter_sf=2&type_sf=any`;
  const data = await get<any>(url);

  // Returnerar förenklad lista av stops
  return data.StopLocation.map((s: any) => ({
    id: s.StopPointNumber,
    name: s.Name,
    coord: [s.Latitude, s.Longitude],
    parent: s.AdvertisedLocationName ? { id: s.StopPointNumber, name: s.AdvertisedLocationName, type: s.SiteId } : undefined
  }));
};
