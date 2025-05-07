const countdown = () => {
  const now = new Date().getTime();
  const targetDate = new Date("June 9, 2025 13:00:00").getTime();
  const gap = targetDate - now;

  if (gap < 0) return;

  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
};

setInterval(countdown, 1000);
countdown();
