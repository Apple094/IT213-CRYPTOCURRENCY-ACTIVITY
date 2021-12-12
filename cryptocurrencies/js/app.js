// Instanciate the classes

const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Create the variables 
const Form = document.getElementById('form');

// Add event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Read Currency
    const currencySelect = document.getElementById('currency').value;

    // Read CryptoCurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;

    // Validate select has something
    if(currencySelect === '' || cryptoCurrencySelect === '') {
        // display an error
        UI.printMessage('All the field are mandatory', 'deep-orange darken-4 card-panel');
    } else {

        // Query the REST API
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect).then(data => {
            console.log(data.coversion);

            ui.displyResult(data.conversion.data.currencySelect);
        });
    }
})