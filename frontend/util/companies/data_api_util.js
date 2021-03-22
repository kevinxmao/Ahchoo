import { TD_ACCESS_TOKEN, TD_API_KEY } from "../../../secret";

let apiKey;
let accessToken;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiKey = TD_API_KEY;
  accessToken = TD_ACCESS_TOKEN;
} else {
  apiKey = process.env.TD_API_KEY;
  accessToken = process.env.TD_ACCESS_TOKEN;
}

export const fetchSingleQuote = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://api.tdameritrade.com/v1/marketdata/${ticker}/quotes?apikey=${apiKey}`,
    headers: {
      "Authorization": `Bearer ${accessToken}`,
    },
  });