// import { IEX_API_KEY } from "../../../secret";

let apiKey;
let endpoint;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  apiKey = "Tpk_0f8b8964750d4e3bb1dd782eef66d578";
  endpoint = "sandbox";
} else {
  // apiKey = process.env.IEX_API_KEY;
  apiKey = "pk_6211bc95be6541b18eebcc3f45e71000";
  endpoint = "cloud";
}

// remove before deploying
// apiKey = "Tpk_0f8b8964750d4e3bb1dd782eef66d578";
// endpoint = "sandbox";

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
    url: `https://${endpoint}.iexapis.com/v1/stock/${ticker}/batch?&types=price,company,stats,intraday-prices&token=${apiKey}`,
  });
  
export const fetchAllQuotes = (tickerArr) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=price,intraday-prices&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  });

export const fetchWeekQuotes = (tickerArr) => (
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=chart&range=5dm&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  })
)

export const fetchMonthQuotes = (tickerArr) => (
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=chart&range=1mm&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  })
)

export const fetchThreeMonthsQuotes = (tickerArr) => (
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=chart&range=3m&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  })
)

export const fetchOneYearQuotes = (tickerArr) => (
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=chart&range=1y&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  })
)

export const fetchMaxQuotes = (tickerArr) => (
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=chart&range=5y&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  })
)

export const searchTicker = str => (
  $.ajax({
    method: 'GET',
    url: `https://${endpoint}.iexapis.com/v1/search/${str}?token=${apiKey}`,
  })
)

export const fetchWatchlistInfo = (tickerArr) => (
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/market/batch?&types=price,quote,company,stats&range=max&symbols=${tickerArr.join(',')}&token=${apiKey}`,
  })
)

export const fetchSingleWeekQuotes = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/${ticker}/chart/5dm&token=${apiKey}`,
  });

export const fetchSingleMonthQuotes = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/${ticker}/chart/1mm&token=${apiKey}`,
  });

export const fetchSingleThreeMonthsQuotes = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/${ticker}/chart/3m&token=${apiKey}`,
  });

export const fetchSingleOneYearQuotes = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/${ticker}/chart/1y&token=${apiKey}`,
  });

export const fetchSingleMaxQuotes = (ticker) =>
  $.ajax({
    method: "GET",
    url: `https://${endpoint}.iexapis.com/v1/stock/${ticker}/chart/5y&token=${apiKey}`,
  });

