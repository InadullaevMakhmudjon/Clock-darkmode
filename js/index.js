const time = document.getElementById('time');
const second = document.getElementById('second');
const dmn = document.getElementById('dmn');
const hr = document.getElementById('hr');
const mn = document.getElementById('mn');
const sc = document.getElementById('sc');

setInterval(() => {
    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * 6;
    const ss = day.getSeconds() * 6;
    hr.style.transform = `rotate(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotate(${mm}deg)`;
    sc.style.transform = `rotate(${ss}deg)`;
    time.textContent = moment(day).format("HH:mm");
    second.textContent = moment(day).format("ss");
});