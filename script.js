const valuePercent = document.getElementById('valuePercent');
const start = document.getElementById('start');
const reset = document.getElementById('reset');
const inputTime = document.getElementById('inputTime');

start.onclick = () => {
    let valueTime = inputTime.value * 60 / 100;
    let current = 99;

    let timerId = setInterval(function() {
        valuePercent.innerText = current + '%';
        if (current == 0) {
            clearInterval(timerId);
        }

        if (current <= 100) {
            valuePercent.style.backgroundColor = 'rgba(0, 147, 0, 0.5)';
        }
        if (current <= 50) {
            valuePercent.style.backgroundColor = 'rgba(212, 255, 0, 0.51)';
        }
        if (current <= 30) {
            valuePercent.style.backgroundColor = 'rgba(255, 0, 0, 0.51)';
        }
        current--;
    }, Number(valueTime * 1000));

}
reset.onclick = () => {
    location.reload()
}