export default function formatNumberWithCommas(number) {
  const [integer, decimal] = number.toString().split(".");
  const formattedInteger = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return decimal ? `${formattedInteger}.${decimal}` : formattedInteger;
}
