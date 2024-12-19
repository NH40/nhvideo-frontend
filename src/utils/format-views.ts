export function formatViews(n: number): string {
  const views = n.toLocaleString('ru-RU')
  
  // Get last digit and last two digits
  const lastDigit = n % 10
  const lastTwoDigits = n % 100

  // Special case for 11-14
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${views} просмотров`
  }

  // Cases for last digit
  switch (lastDigit) {
    case 1:
      return `${views} просмотр`
    case 2:
    case 3:
    case 4:
      return `${views} просмотра`
    default:
      return `${views} просмотров`
  }
}
