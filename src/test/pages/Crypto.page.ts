import BasePage from "./Base.page";

export class CryptoPage extends BasePage{
    protected BASE_URL = 'https://www.mercadobitcoin.com.br/'
    protected API_URL = 'https://cdn.mercadobitcoin.com.br/api/tickers?' + '**'

    constructor() {
        super();
    }

    open() {
        super.open(this.BASE_URL);
    }

    get getBaseURL(){
        return this.BASE_URL;
    }

    get getApiURL(){
        return this.API_URL;
    }

    get bitcoinPriceElement() {
        return $('div[data-category="btc"] p ~ .price');
    }
}
