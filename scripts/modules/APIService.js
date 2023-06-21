const API_URL = "https://api.openweathermap.org/data/2.5/";
const API_KEY = "bb35408539d57f80069cdde64abcce6c";
// https://api.openweathermap.org/data/2.5/weather?q=%D0%9F%D0%BE%D0%BB%D0%BE%D1%86%D0%BA&appid=bb35408539d57f80069cdde64abcce6c&lang=ru

export const fetchWeather = async (city) => {
    try{
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if(!response.ok){
            throw new Error("Ошибка запроса")
        }
        const data = await response.json();
        return {success: true, data}
    }catch(err){
        return {success: false, err}
    }
}