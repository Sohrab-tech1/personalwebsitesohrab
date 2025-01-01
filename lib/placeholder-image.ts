export function getPlaceholderImage(title: string): string {
  // Use a placeholder service until you have your actual image
  return `https://placehold.co/1792x1024/1a365d/ffffff/png?text=${encodeURIComponent(title)}`
} 