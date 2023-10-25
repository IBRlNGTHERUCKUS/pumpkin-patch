const timer = document.querySelector('.timer');

function updateTimer() {
    const presentDate = new Date;
    const targetDate = new Date(`october 31 ${presentDate.getFullYear()}`);
    let difference = targetDate-presentDate;
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));

    timer.textContent=`${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}
updateTimer()
setInterval(updateTimer, 1000);
