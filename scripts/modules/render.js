import { getCurrentDateTime } from "./util.js"

export const renderWidgetToday = (widget, data) =>{
    const {dayOfMonth, month, year, dayOfWeek, hours, minutes} = getCurrentDateTime();

    widget.insertAdjacentHTML(
        'beforeend',
        `
        <div class="widget__today">
            <div class="widget__date-block">
                <p class="widget__date">${dayOfMonth} ${month} ${year}</p>
                <p class="widget__time">${hours}:${minutes}</p>
                <p class="widget__day">${dayOfWeek}</p>
            </div>
            <div class="widget__icon">
                <img class="widget__img" src="./icon/${data.weather[0].icon}.svg" alt="Погода">
                
            </div>
            <div class="widget__wheather">
                <div class="widget__city">
                    <p>${data.name}</p>
                    <button class="widget__change-city" aria-label="Изменить город"></button>
                </div>
                <p class="widget__temp-big">${(data.main.temp - 273.15).toFixed(1)} °C</p>
                <p class="widget__felt">ощущается</p>
                <p class="widget__temp-small">${(data.main.feels_like - 273.15).toFixed(1)} °C</p>
            </div>
        </div>
        `
    )
}

const windDirection = (deg) =>{
    //+-20 градусов - стрелка вправо
    if (deg<=22.5 && deg > 337.5){
        return "&rarr;";
    }
    //20-70 градусов - стрелка вправо вверх
    if (deg > 22.5 && deg <= 67.5){
        return "&#8599;";
    }
    //70 градусов - стрелка вправо вверх
    if (deg > 67.5 && deg <= 112.5){
        return "&uarr;";
    }
    //70 градусов - стрелка вправо вверх
    if (deg > 112.5 && deg <= 157.5){
        return "&#8598;";
    }
    //70 градусов - стрелка вправо вверх
    if (deg > 157.5 && deg <= 202.5){
        return "&larr;";
    }
    //70 градусов - стрелка вправо вверх
    if (deg > 202.5 && deg <= 247.5){
        return "&#8601;";
    }
    //70 градусов - стрелка вправо вверх
    if (deg > 247.5 && deg <= 292.5){
        return "&darr;";
    }
    //70 градусов - стрелка вправо вверх
    if (deg > 292.5 && deg <= 337.5){
        return "&#8600;";
    }
}

export const renderWidgetOther = (widget, data) =>{
    console.log('data: ', data);

    widget.insertAdjacentHTML(
        'beforeend',
        `
        <div class="widget__other">
            <div class="widget__wind">
                <p class="widget__wind-title">Ветер</p>
                <p class="widget__wind-speed">${data.wind.speed} м/с</p>
                <p class="widget__wind-text">${windDirection(data.wind.deg)}</p>
            </div>
            <div class="widget__humidity">
                <p class="widget__humidity-title">Влажность</p>
                <p class="widget__humidity-value">${data.main.humidity}%</p>
                <p class="widget__humidity-text">Т.Р: -0.2 °C</p>
            </div>
            <div class="widget__pressure">
                <p class="widget__pressure-title">Давление</p>
                <p class="widget__pressure-value">${(data.main.pressure / 1.333).toFixed(2)}</p>
                <p class="widget__pressure-text">мм рт.ст.</p>
            </div>
        </div>
        `
    )
}

export const renderWidgetForecast = (widget) =>{
    
    widget.insertAdjacentHTML(
        'beforeend',
        `
        <ul class="widget__forecast">
            <li class="widget__day-item">
                <p class="widget__day-text">ср</p>
                <img class="widget__day-img" src="./icon/02d.svg" alt="Погода">
                <p class="widget__day-temp">18.4°/13.7°</p>
            </li>
            <li class="widget__day-item">
                <p class="widget__day-text">чт</p>
                <img class="widget__day-img" src="./icon/03d.svg" alt="Погода">
                <p class="widget__day-temp">17.3°/11.3°</p>
            </li>
            <li class="widget__day-item">
                <p class="widget__day-text">пт</p>
                <img class="widget__day-img" src="./icon/04d.svg" alt="Погода">
                <p class="widget__day-temp">16.5°/10.9°</p>
            </li>
            <li class="widget__day-item">
                <p class="widget__day-text">сб</p>
                <img class="widget__day-img" src="./icon/01d.svg" alt="Погода">
                <p class="widget__day-temp">18.6°/12.5°</p>
            </li>
            <li class="widget__day-item">
                <p class="widget__day-text">вс</p>
                <img class="widget__day-img" src="./icon/03d.svg" alt="Погода">
                <p class="widget__day-temp">17.3°/11.2°</p>
            </li>
        </ul>
        `
    )
}

export const showError = (widget, error) => {
    widget.textContent = error.toString();
    widget.classList.add('widget_error');
}