import {CryptoPage} from "../pages/Crypto.page";
import mockData from '../data/MockData.json';

/**
 * Module pattern
 */
import {mockGetResponse} from "../utils/Mock";

describe.only('Crypto page tests', () => {
    const cryptoPage: CryptoPage = new CryptoPage();

    it('Should display the right Bitcoin price.', () => {
        mockGetResponse(mockData, 200, cryptoPage.getApiURL)

        cryptoPage.open();

        expect(cryptoPage.bitcoinPriceElement).toHaveText('R$ 338.107');
    });
});
