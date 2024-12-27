export const combineDateWithTime = (time) => {
  const today = new Date();
  const [hours, minutes] = time.split(":");
  // Create a new Date object with today's date and the provided time
  today.setHours(parseInt(hours, 10), parseInt(minutes, 10), 0, 0);

  return today;
};
