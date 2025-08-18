const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 7);

const daysSpan = document.getElementById('days');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysSpan.innerHTML = String(days).padStart(2, '0');
    hoursSpan.innerHTML = String(hours).padStart(2, '0');
    minutesSpan.innerHTML = String(minutes).padStart(2, '0');
    secondsSpan.innerHTML = String(seconds).padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "<p class='text-xl text-green-400'>We're Live!</p>";
        document.querySelector('.gif-container img').style.display = 'none';
        document.querySelector('p').innerHTML = "Our site is now live! Thank you for your patience.";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();