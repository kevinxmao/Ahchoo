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

export const objEqual = (obj1, obj2) => {
  if (obj1 === obj2) {
    return true
  } else if ((typeof obj1 === "object" && obj1 !== null) && (typeof obj2 === "object" && obj2 !== null)) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

    for (let property in obj1) {
      if (obj2.hasOwnProperty(property)) {
        if (! objEqual(obj1[property], obj2[property])) return false;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

export const findAndRemove = (tickerName, arr) => {
  
}

