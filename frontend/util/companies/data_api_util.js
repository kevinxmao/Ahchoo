export const fetchStockQuote = ticker => (
    $.ajax({
      method: "GET",
      url: `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=sk_aa086829b4c14cc19b0def771aad8c1d`
    })
)

export const fetchAllCompanies = () => (
  $.ajax({
    method: "GET",
    url: `/api/`
  })
)