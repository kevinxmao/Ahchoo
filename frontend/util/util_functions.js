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
