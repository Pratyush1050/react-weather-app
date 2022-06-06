import axios from "axios";

async function getAddressOfCoordinates(lat, lng) {
  const response = await axios.get(
    "https://api.opencagedata.com/geocode/v1/json? ",
    {
      params: {
        key: process.env.REACT_APP_OPENCAGEDATA_REVERSE_GEOCODING_API,
        q: `${lat}+${lng}`,
        language: "en"
      }
    }
  );

  return response;
}

export default getAddressOfCoordinates;
