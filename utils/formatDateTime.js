export const formatDateTime = () => {
  const now = new Date();

  const options = {
    weekday: "long", // Full name of the day (e.g., Thursday)
    day: "numeric", // Day of the month (e.g., 12)
    month: "long", // Full name of the month (e.g., September)
    hour: "2-digit", // Hour in 2 digits (e.g., 09)
    minute: "2-digit", // Minutes in 2 digits (e.g., 47)
  };

  return new Intl.DateTimeFormat("en-GB", options).format(now);
};
