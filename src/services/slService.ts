// export const get = async (searchText: string) => {
//     const BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=" + searchText + "&any_obj_filter_sf=2&type_sf=any";
//     const response = await fetch(BASE_URL);
//     const data = response.json();
//     return data;
// };

import { get } from "./serviceBase";
import type { SlStop } from "../models/SlStop";

const BASE_URL = "https://journeyplanner.integration.sl.se/v2/stop-finder?";

export const getStops = async (searchText: string) => {
  return await get<SlStop>(`${BASE_URL}name_sf=${searchText}&any_obj_filter_sf=2&type_sf=any`);
};
