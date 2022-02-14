import BasePage from "./Base.page";

export class LoginPage extends BasePage {

    constructor() {
        super();
    }

    get buttonLogin() {
        return $('.login');
    }

    get inputEmail() {
        return $('body #email');
    }

    get inputPassword() {
        return $('body #passwd');
    }

    get buttonSignIn() {
        return $('body #SubmitLogin');
    }

    get userLoggedIn() {
        return $('.account');
    }

    get welcomeMessage() {
        return $('.info-account');
    }

    get buttonLogout() {
        return $('.logout');
    }

    open(): void {
        super.open();
    }

    login(email: string, password: string) {
        try {
            this.buttonLogin.click();
        } catch (err) {
            console.log('The user is already logged in, start to logout');
            this.buttonLogout.click();
            console.log('Success');
            this.buttonLogin.click();
        }
        this.inputEmail.waitForEnabled();
        this.inputEmail.setValue(email);
        this.inputPassword.setValue(password);
        this.buttonSignIn.click();
        this.welcomeMessage.waitForExist();
    }
}
