import {HomePage} from '../pages/Home.page';

describe('Home page tests', () => {
    const homePage: HomePage = new HomePage();

    before(() => {
        homePage.open();
    });
    /**
     * Iterator pattern
     */
    it('C1 Main page elements is present.', function () {
        for (const e of homePage.mainPageElements) {
            expect(e).toBeDisplayed();
        }
    });
});
