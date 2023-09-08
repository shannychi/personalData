let output = document.querySelector("p[data-testid='currentDayOfTheWeek']");
let time = document.querySelector("p[data-testid='currentUTCTime']");

let d = new Date();
let day = d.getDay();
function utctime() {
    const now = new Date();
    const utcmilliseconds = now.getTime();
    document.querySelector("p[data-testid='currentUTCTime']").textContent = utcmilliseconds;
}
switch (day) {
    case 0:
        day = "Sunday";
        break;
        case 1:
            day = "Monday";
            break;
            case 2:
                day = "Tuesday";
                break;
                case 3:
                    day = "Wenesday";
                    break;
                    case 4:
                        day = "Thursday";
                        break;
                        case 5:
                            day = "Friday";
                            break;
                            case 6:
                                day = "Saturday";
}

setInterval(utctime, 100);
output.innerHTML = day;
time.innerHTML = utctime();