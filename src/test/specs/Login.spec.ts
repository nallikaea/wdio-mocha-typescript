import {LoginPage} from '../pages/Login.page';
import { SystemMessages } from '../data/constants/SystemMessages';
import login from '../data/Login.json';

describe('Authentication page.', () => {
    const loginPage: LoginPage = new LoginPage();

    before(() => {
        loginPage.open();
    });

    it('Displays login message successfully.', () => {
        loginPage.login(login.user.login, login.user.password);

        expect(loginPage.welcomeMessage).toHaveText(
            SystemMessages.FEEDBACK_USER_LOGGED,
        );
    });

    it('Displays user name on the page.', () => {
        expect(loginPage.userLoggedIn).toHaveText(login.user.name);
    });
});
