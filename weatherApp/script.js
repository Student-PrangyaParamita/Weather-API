const button = document.getElementById('search-btn');
const input = document.getElementById('city-input');

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const cityCondition = document.getElementById('city-condition');
const conditionIcon = document.getElementById('condition-icon');

async function getData(cityName) {
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=4ae6c750446e4e849c5181837242408&q=${cityName}&aqi=yes`);
    return await promise.json();
}

// const Card = () => {
//     const weather = getData(value);

//     return (
//         <div className="card">
//             <img src={weather?.data?.current?.condition?.icon?} />
//         </div>
//     );
//     export default Card;
// }

button.addEventListener('click', async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText = result.location.localtime;
    cityTemp.innerText = result.current.temp_c;
    cityCondition.innerText = result.current.condition.text;
    conditionIcon.innerHTML = result.current.condition.icon;
});
