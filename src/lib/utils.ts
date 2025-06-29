export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function formatTime(time: string): string {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export function generateBookingId(): string {
  return `BK${Date.now().toString(36).toUpperCase()}`;
}

export function getStopsText(stops: number): string {
  if (stops === 0) return 'Direct';
  if (stops === 1) return '1 Stop';
  return `${stops} Stops`;
}

export function getClassColor(flightClass: string): string {
  switch (flightClass) {
    case 'Economy':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Business':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    case 'First':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
} 