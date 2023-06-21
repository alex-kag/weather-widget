import { fetchWeather } from "./APIService.js";
import { 
    renderWidgetForecast, 
    renderWidgetOther, 
    renderWidgetToday, 
    showError
} from "./render.js";

export const startWidget = async ()=>{
    const widget = document.createElement('div');
    widget.classList.add('widget');

    const dataWeather = await fetchWeather('Полоцк');
    if(dataWeather.success){
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    }else{
        showError(widget,dataWeather.err);
    }

    renderWidgetForecast(widget);

    return widget;
};
