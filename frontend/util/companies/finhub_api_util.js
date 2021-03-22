export const fetchStockQuote = ticker => (
    $.ajax({
      method: "GET",
      url: `https://finnhub.io/api/v1/quote?symbol=${ticker.toUpperCase()}&token=c1c0juf48v6sp0s57b5g`,
    })
)

