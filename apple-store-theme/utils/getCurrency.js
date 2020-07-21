export const getCurrency = (price, currency) => {
  const lang = currency
    .split('')
    .splice(0, currency.length - 1)
    .join('')

  const symbol = new Intl.NumberFormat(`en-${lang}`, {
    style: 'currency',
    currency: currency,
  }).formatToParts(price)[0].value

  return symbol
}
