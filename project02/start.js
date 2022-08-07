(()=> {
    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;

    function setElementInnerText(id, text) {
        const element = document.getElementById(id);
        element.innerText = text
    }
    function getYear() {
        const year = new Date().getFullYear()
        const header = document.getElementById('new-year');
        header.innerText = `Countdown to New Year ${year}`
    }
    function countDown() {
        const now = new Date().getTime();
        const newYear = new Date('December 31, 2022 23:59:59').getTime();
        const unixTimeLeft = newYear - now

        // const daysElement = document.getElementById('days');
        // daysElement.innerText = Math.floor(unixTimeLeft / DAY);
        setElementInnerText('days', Math.floor(unixTimeLeft / DAY));
        
        // const hoursElement = document.getElementById('hours');
        // hoursElement.innerHTML = Math.floor(unixTimeLeft % DAY / HOUR);
        setElementInnerText('hours', Math.floor(unixTimeLeft % DAY / HOUR));

        // const minutesElement = document.getElementById('minutes');
        // minutesElement.innerHTML = Math.floor(unixTimeLeft % HOUR / MINUTE);
        setElementInnerText('minutes', Math.floor(unixTimeLeft % HOUR / MINUTE));

        // const secondsElement = document.getElementById('seconds');
        // secondsElement.innerHTML = Math.floor(unixTimeLeft % HOUR / MINUTE);
        setElementInnerText('seconds', Math.floor(unixTimeLeft % MINUTE / SECOND));
    }

    function run(){
        getYear();
        setInterval(countDown, SECOND);
    }

    run();
})();