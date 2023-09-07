let output = document.querySelector("div[data-testid='currentDayOfTheWeek']");
let time = document.querySelector("div[data-testid='currentUTCTime']");

let d = new Date();
let day = d.getDay();
let ntime = d.getUTCHours() + ":" + d.getUTCMinutes() + ":" + d.getUTCSeconds();
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

output.innerHTML = day;
time.innerHTML = ntime;