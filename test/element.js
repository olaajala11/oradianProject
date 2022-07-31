const timeOut = 3000;
const jsTimeOut = timeOut * 5;

export default class Element {
    /**
     * Constructs an element based on selector
     *
     * @param {string} selector Element selector
     */
    constructor(selector) {
        this.selector = selector;
    }

    async click() {
        await $(this.selector).click();
    }

    async clickViaJs(timeout = jsTimeOut) {
        //await this.waitForExist(timeout);
        await browser.execute(selector => document.querySelector(selector).click(), this.selector);
    }

    /**
     * Gets the text content from a DOM-element
     * 
     *@returns {Promise<String>} text obtained
     */
    async getText() {
        const text = await $(this.selector).getText();
        return text;
    }

    /**
     * Wait for the element to be displayed or not displayed
     *
     * @param {Number} timeout Time in ms to wait
     */
    async waitForDisplayed(timeout = timeOut) {
        try {
            await $(this.selector).waitForDisplayed({ timeout, reverse: false });
        } catch (err) {
            throw new Error(this.selector + ' was not displayed')
        }
    }

    /**
     * Wait for the element to be displayed or not displayed
     *
     * @param {Number} timeout Time in ms to wait
     */
    async waitForNotDisplayed(timeout = timeOut) {
        try {
            await $(this.selector).waitForDisplayed({ timeout, reverse: true });
        } catch (err) {
            throw new Error(this.selector + ' was displayed')
        }
    }

    /**
     * Return true if the selected DOM-element is displayed.
     *
     * @param {Number} timeout Time in ms to wait
     *@returns {Promise<Boolean>} True is element is displayed, otherwise false is returned
     */
    async isDisplayed(timeout = 0) {
        let isDisplayed;
        if (timeout > 0 && typeof timeout === 'number') {
            try {
                await this.waitForDisplayed(timeout)
                isDisplayed = true;
            } catch (error) {
                isDisplayed = false;
            }
        } else {
            isDisplayed = await $(this.selector).isDisplayed();
        }
        return isDisplayed;
    }

    /**
     * Wait for an element for the provided amount of millisenconds to be present within the DOM.
     * 
     * @param {Number} timeout Time in ms to wait
     * @param {Boolean} reverse If true, it waits for the opposite (default: false)
     */
    async waitForExist(timeout = timeOut, reverse = false) {
        try {
            await $(this.selector).waitForExist({timeout, reverse});
        } catch (err) {
            throw new Error(this.selector + ' did not exist')
        }
    }

    /**
     * Send a sequence of key strokes to an element 
     * 
     * @param {string, number, Array.<string, number>} value value to be added 
     */
    async setValue(value, timeout = timeOut) {
        await this.waitForExist(timeout)
        await $(this.selector).setValue(value);
    }

    /**
     * Scrolls to the middle of an element
     *
     * @param {*} timeout Time in ms to wait
     */
    async scrollTo(timeout = timeOut) {
        try {
            await this.waitForExist(timeout);
            await browser.execute(function (elem) {
                const elementRect = elem.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const middle = absoluteElementTop - (window.innerHeight / 2);
                window.scrollTo(0, middle);
            }, await $(this.selector));
            await browser.pause(1000);
        } catch (error) {
            throw new Error('Could not scroll via JS to element');
        }
    }

    /**
     * Scrolls into view of an element
     */
    async scrollIntoView(timeout = timeOut) {
        await this.waitForExist(timeout);
        await $(this.selector).scrollIntoView();
    }

    /**
     * Wait for an element to be clickable
     *
     * @param {Number} timeout 
     */
    async waitForClickable(timeout = timeOut, reverse = false) {
        await $(this.selector).waitForClickable({timeout, reverse})
    }
}