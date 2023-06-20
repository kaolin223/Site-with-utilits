/*fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (result) {
    return result.json()
}).then(function (data) {
    console.log(data);
})

*/

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    console.log(result);
    console.log(result.Valute.USD.Value);
};


console.log(getCurrencies);