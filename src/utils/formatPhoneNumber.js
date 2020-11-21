export function formatPhoneNumber(number) {
  return `(${number.substr(0, 2)}) ${number.substr(2, 4)}-${number.substr(
    6,
    6,
  )}`;
}
