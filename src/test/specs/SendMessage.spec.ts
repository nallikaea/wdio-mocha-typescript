import {SystemMessages} from '../data/constants/SystemMessages';
import {SystemLabels} from '../data/constants/SystemLabels';
import {LoginPage} from '../pages/Login.page';
import {ContactPage} from '../pages/Contact.page';
import login from '../data/Login.json';

describe('Send message to customer service.', () => {
    const loginPage: LoginPage = new LoginPage();
    const contactPage: ContactPage = new ContactPage();

    before(() => {
        loginPage.open();
        loginPage.login(login.user.login, login.user.password);
    });

    it('Displays a message in heading page.', () => {
        contactPage.goToContactPage();

        expect(contactPage.heading).toHaveText(SystemLabels.CUSTOMER_SERVICE);
    });

    it('Displays successfully after user sends message to customer service.', () => {
        contactPage.sendMessage({
            subject: '2',
            message: 'My first test.',
            file: 'file.pdf',
        });

        expect(contactPage.successMessage).toHaveText(
            SystemMessages.FEEDBACK_MESSAGE_SENT,
        );
    });
});
