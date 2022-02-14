import BasePage from "./Base.page";

export class HomePage extends BasePage {

    constructor() {
        super();
    }

    get logoSite() {
        return $('img.logo.img-responsive');
    }

    get cart() {
        return $('.shopping_cart > a');
    }

    get mainPageElements() {
        return [this.logoSite, this.cart]
    }

    open() {
        super.open();
    }
}