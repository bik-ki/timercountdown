function countdownToNepaliNewYear() {
  const today = new Date();
  const target = new Date("April 13, 2026 00:00:00"); // Nepali New Year 2083

  const diff = target - today;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").textContent = `${daysLeft} days left`;
}

countdownToNepaliNewYear();
setInterval(countdownToNepaliNewYear, 60 * 60 * 1000); // update every hour
