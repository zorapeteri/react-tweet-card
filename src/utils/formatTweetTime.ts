function formatTweetTime(date: Date) {
  const timeFormatted = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  const dateFormatted = date.toLocaleString('en-US', { month: 'short', year: 'numeric', day: 'numeric' });
  return `${timeFormatted} · ${dateFormatted}`;
}

export default formatTweetTime;
