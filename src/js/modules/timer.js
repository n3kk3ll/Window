const timer = (id, deadline) => {
  const getTimeToDeadline = endTime => {
    const timeLeft = Date.parse(endTime) - Date.parse(new Date()),
          msInDay = Math.floor((timeLeft / (1000 * 60 * 60 * 24))),
          msInHour = Math.floor((timeLeft / (1000 * 60 * 60) % 24)),
          msInMinute = Math.floor((timeLeft / (1000 * 60) %  60)),
          msInSecond = Math.floor(((timeLeft / 1000) % 60));

    return { 
      'total': timeLeft,
      'days': msInDay,
      'hours': msInHour,
      'minutes': msInMinute,
      'seconds': msInSecond
    };
  };

  const setTimer = (selector, endtime) => {
    const clock = document.querySelector(selector),
          days = clock.querySelector(`#days`),
          hours = clock.querySelector(`#hours`),
          minutes = clock.querySelector(`#minutes`),
          seconds = clock.querySelector(`#seconds`),
          interval = setInterval(updateClock, 1000);

    updateClock()

    function updateClock() {
      const timeLeft = getTimeToDeadline(endtime);

      days.textContent = timeLeft.days >= 0 && timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days;
      hours.textContent = timeLeft.hours >= 0 && timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours;
      minutes.textContent = timeLeft.minutes >= 0 && timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;
      seconds.textContent = timeLeft.seconds >= 0 && timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

      if(timeLeft.total <= 0) {
        days.textContent = `00`;
        hours.textContent = `00`;
        minutes.textContent = `00`;
        seconds.textContent = `00`;
        clearInterval(interval);
      }
    }
  };

  setTimer(id, deadline);
};

export default timer;