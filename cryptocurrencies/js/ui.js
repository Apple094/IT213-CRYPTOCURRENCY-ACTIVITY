class UI {
    constructor() {
        this.init();
    }

    init() {
        this.printCryptoCurrencies();
    }

    // Print the <option> for the form
    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList().then(data => {
            //console.log(data.cryptoCurrencies.data);
            const cryptoCurrencies = data.cryptoCurrencies.data;

            // Build the <select> from the REST API
            const select = document.getElementById('cryptocurency')

            cryptoCurrencies.foreach(currency => {
                // add the <option>
                const option = document.createElement('option');

                option.value = currency.id;
                option.appendChild(document.createTextNode(currency.name));
                select.appendChild(option);
                
            });
        });
    }

    // print a message 
    printMessage(msg, className) {
        const div = document.createElement('div');

        // add the classes
        div.appendChild(document.createTextNode(msg));

        const nessageDiv = document.querySelector('messages');

        messageDiv.appendChild(div);

        // Remove the message
        setTimeout(() => {
            document.querySelector('.message div').remove();
        }, 3000)
    }

    // Display the results
    displayResult(data, cur) {

        let HTMLTemplate = `
            <div class="card darken-3">
                 <div class="card-content white-text"
                      <span class="card-title">
                          Result
                      </span>
                      <p>the price of 1 ${data.name} in ${cur} is ${data.quote[cur].price}.</p>
                 </div>
            </div>
        `;

        const divResult = document.querySelector('#result');
        divResult.innerHTML = HTMLTemplate;
    }
}