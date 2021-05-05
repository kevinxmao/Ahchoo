export const formatNumber = (x) => {
  x = Math.abs(x).toFixed(2);
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${parts.join(".")}`;
};

export const formatPercent = (x) => {
  x = (Math.abs(x) * 100.0).toFixed(2);
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${parts.join(".")}%`;
}

export const formatCompanyName = name => {
  const regex = /( Inc.*)/;
  return name.replace(regex, "")
}

export const ownShare = (holdings, ticker) => {
    return holdings.some(holding => holding.ticker === ticker);
}

export const debounce = (fcn, wait) => {
  let timeout;

  return function debouncedFcn(...args) {
    const later = () => {
      timeout = null;
      fcn(...args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, wait)
  };
}

export const formatLargeNumber = number => {
  return Math.abs(Number(number)) >= 1.0e+12

    ? (Math.abs(Number(number)) / 1.0e+12).toFixed(2) + "T"
    // Six Zeroes for Millions 
    : Math.abs(Number(number)) >= 1.0e+9

      ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"
      // Three Zeroes for Thousands
      : Math.abs(Number(number)) >= 1.0e+6

        ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + "M"

        : Math.abs(Number(number));
}

export const camalize = (str) => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export const tickerInWatchlists = (symbol, watchlists) => {
  let res = {};

  for (let [key, value] of Object.entries(watchlists)) {
    res[key] = (value.tickers.findIndex(ticker => ticker.ticker === symbol) !== -1);
  }

  return res;
}