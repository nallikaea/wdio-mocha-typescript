import {HomePage} from '../pages/Home.page';
import {LoginPage} from "../pages/Login.page";

describe('Home page tests', () => {
    const homePage: HomePage = new HomePage();

    before(() => {
        homePage.open();
    });
    /**
     * Iterator pattern
     */
    it('Main page elements is present.', function () {
        for (const e of homePage.mainPageElements){
            expect(e).toBeDisplayed();
        }
    });
});
