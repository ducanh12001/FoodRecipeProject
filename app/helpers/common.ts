export const numberWithCommas = (x: number) => {
  let parts = x.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const result = parts.join('.');
  return result;
};
