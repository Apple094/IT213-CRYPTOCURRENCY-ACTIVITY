const proxyURL = "https://cors-anywhere.herokuapp.com/";
const baseURL = 'https://pro-api.coinmarketcap.com/v1/';
const apikey = 'CMC_PRO_KEY=f255dd7b-264a-9736-8306c3d22e79';
const apiURL = `${proxyURL}${baseURL}`;
console.log(apiURL);

class CryptoAPI {

    // Query the REST API
    async queryAPI(cur, crypto){
        const url = await fetch( `${apiURL})tools/price-coversion?amount=1&id=${crypto}&convert=${cur}&${apikey} `);
        const conversion = await url.json();

        return {
            conversion
        }
    }

    async getCryptoCurrenciesList() {
        const url = await fetch(`${apiURL}cryptocurrency/map?limit=99&${apikey}`);

        const cryptoCurrencies = await url.json();

        return {
            cryptoCurrencies
        }
    }

}
       