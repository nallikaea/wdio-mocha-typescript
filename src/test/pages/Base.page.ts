let instance: any = null;
export default abstract class BasePage {
    /**
     * Page Object pattern
     * */
    private readonly URL: string = '/';
    private title: string | undefined;

    /**
     * Constructor pattern
     * Singleton pattern
     */
    protected constructor() {
        if (!instance) {
            this.title = 'page';
            instance = this;
        } else {
            return this;
        }
    }

    open(path = this.URL): void {
        browser.url(path)
    }
}
