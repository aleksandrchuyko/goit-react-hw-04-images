export function countPositiveFeedbackPercentage(good, total) {
  if (!total) {
    return 0;
  }
  return Math.floor((good * 100) / total);
}
