export const formatAsDollars = (price: string | number): string => {
  const dollarsAmount = new Intl.NumberFormat('en-Us', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price) / 100)

  return dollarsAmount
}