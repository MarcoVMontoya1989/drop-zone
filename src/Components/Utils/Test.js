export function countdownTimer() {
  const difference = +new Date("2020-01-01") - +new Date();
  let remaining = "Time's up!";

  if (difference > 0) {
    const parts = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    remaining = Object.keys(parts).map(part => {
      return `${parts[part]} ${part}`;
    }).join(" ");
  }

  document.getElementById("countdown").innerHTML = remaining;
}

export default countdownTimer;