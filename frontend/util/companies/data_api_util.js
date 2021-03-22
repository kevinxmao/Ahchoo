// import { IEX_API_KEY } from "../../../secret";

let apiKey;
let endpoint;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiKey = "Tpk_0f8b8964750d4e3bb1dd782eef66d578";
  endpoint = "sandbox";
} else {
  apiKey = process.env.IEX_API_KEY;
  // apiKey = "pk_6211bc95be6541b18eebcc3f45e71000";
  endpoint = "cloud";
}

// export const fetchSingleQuote = (ticker) =>
//   $.ajax({
//     method: "GET",
//     url: `https://api.tdameritrade.com/v1/marketdata/${ticker}/quotes?apikey=${apiKey}`,
//     headers: {
//       "Authorization": `Bearer ${accessToken}`,
//     },
//   });

export const fetchSingleQuote = (ticker) =>
  $.ajax({
    method: "GET",
    url:
      `https://${endpoint}.iexapis.com/stable/stock/${ticker}/quote?token=${apiKey}`,
  });
  
export const fetchAllQuotes = (tickerArr) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=price&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  });