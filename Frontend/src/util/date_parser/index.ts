const DateFormat = (date: Date) => {
  //if it is today return time, if it's yesterday return yesterday, if within 7 days say 5 days ago, if within 30 days say 20 days ago, if within 365 days say 5 months ago, if more than 365 days say 2 years ago

  const today = new Date();

  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const dateDate = date.getDate();
  const dateMonth = date.getMonth();
  const dateYear = date.getFullYear();

  const todayTime = today.getTime();
  const dateTime = date.getTime();

  const timeDifference = todayTime - dateTime;
  const dayDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
  const monthDifference = Math.floor(dayDifference / 30);
  const yearDifference = Math.floor(monthDifference / 12);

  if (dayDifference === 0) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const minutesDifference = today.getMinutes() - minutes;
    const hoursDifference = today.getHours() - hours;

    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    if (hoursDifference === 0 && minutesDifference < 1) {
      return "Just now";
    } else if (hoursDifference === 0 && minutesDifference < 60) {
      return `${minutesDifference} minutes ago`;
    } else if (hoursDifference === 1) {
      return `${hoursDifference} hour ago`;
    } else if (hoursDifference < 24) {
      return `${hoursDifference} hours ago`;
    }

    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  } else if (dayDifference === 1) {
    return "Yesterday";
  } else if (dayDifference < 7) {
    return `${dayDifference} days ago`;
  } else if (dayDifference < 30) {
    return `${monthDifference} months ago`;
  } else if (dayDifference < 365) {
    return `${monthDifference} months ago`;
  } else {
    return `${yearDifference} years ago`;
  }
};

export default DateFormat;
