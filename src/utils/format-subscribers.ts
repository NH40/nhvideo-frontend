export function formatSubscribers(n: number): string {
  // Get last digit and last two digits
  const lastDigit = n % 10
  const lastTwoDigits = n % 100

  // Special case for 11-14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `подписчиков`
  }

  // Cases for last digit
  switch (lastDigit) {
    case 1:
      return `подписчик`
    case 2:
    case 3:
    case 4:
      return `подписчика`
    default:
      return `подписчиков`
  }
}
