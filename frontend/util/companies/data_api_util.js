import { TD_ACCESS_TOKEN, TD_API_KEY } from "../../../secret";

export const fetchSingleQuote = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://api.tdameritrade.com/v1/marketdata/${ticker}/quotes?apikey=${TD_API_KEY}`,
    headers: {
      "Authorization": `Bearer ${TD_ACCESS_TOKEN}`,
    },
  });