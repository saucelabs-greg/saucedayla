const assert = require('assert');

describe('Sauce Demo home page', () => {
    browser.executeScript("sauce:context=Sauce Demo Homepage");
    it('should have the right title', () => {
        browser.url('https://www.saucedemo.com');
        const title = browser.getTitle();
        assert.strictEqual(title, 'Swag Labs');
    });

});

