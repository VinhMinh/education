export function formatMonthYear(dateString: string) {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };

  return date.toLocaleDateString("en-US", options);
}
