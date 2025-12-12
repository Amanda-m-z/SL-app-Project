import './style.css'

const response = await fetch ("https://journeyplanner.integration.sl.se/v2/system-info");
const data = await response.json();

console.log(data);
