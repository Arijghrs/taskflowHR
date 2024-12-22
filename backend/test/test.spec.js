import { Builder, By, until } from 'selenium-webdriver';
import assert from 'assert';

describe('Login Page Tests', function () {
    this.timeout(20000); // Increased timeout for the entire test suite

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function () {
        await driver.quit();
    });

    // Test 1: Verify the title of the login page
    it('should load the login page and verify the title', async function () {
        await driver.get('http://localhost:3000/auth/login');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'React App'); 
    });

    // Test 2: Verify email input field is present
    it('should verify the presence of the email input field', async function () {
        const emailInput = await driver.wait(until.elementLocated(By.id('email')), 20000);
        assert(emailInput !== null, 'Email input field not found!');
    });

    // Test 3: Verify password input field is present
    it('should verify the presence of the password input field', async function () {
        const passwordInput = await driver.wait(until.elementLocated(By.id('password')), 20000);
        assert(passwordInput !== null, 'Password input field not found!');
    });

    // Test 4: Submit the login form with valid credentials
    it('should successfully log in with valid credentials', async function () {
        await driver.findElement(By.id('email')).sendKeys('eya@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('p1234');
        await driver.findElement(By.id('button')).click();

        await driver.wait(until.urlIs('http://localhost:3000/'), 10000);
        const currentUrl = await driver.getCurrentUrl();
        assert.strictEqual(currentUrl, 'http://localhost:3000/', 'Login failed, incorrect URL');
    });

    // Test 5: Show error message if email is empty
    it('should show an error message if email is empty', async function () {
        await driver.findElement(By.id('password')).sendKeys('p1234');
        await driver.findElement(By.id('button')).click();

        const errorMessage = await driver.wait(until.elementLocated(By.css('.error-message')), 20000);
        const errorText = await errorMessage.getText();
        assert.strictEqual(errorText, 'Email is required', 'Error message is incorrect');
    });

    // Test 6: Show error message if password is empty
    it('should show an error message if password is empty', async function () {
        await driver.findElement(By.id('email')).sendKeys('eya@gmail.com');
        await driver.findElement(By.id('button')).click();

        const errorMessage = await driver.wait(until.elementLocated(By.css('.error-message')), 20000);
        const errorText = await errorMessage.getText();
        assert.strictEqual(errorText, 'Password is required', 'Error message is incorrect');
    });

    // Test 7: Show error message for invalid email format
    it('should show an error message for invalid email format', async function () {
        await driver.findElement(By.id('email')).sendKeys('invalid-email');
        await driver.findElement(By.id('password')).sendKeys('p1234');
        await driver.findElement(By.id('button')).click();

        const errorMessage = await driver.wait(until.elementLocated(By.css('.error-message')), 20000);
        const errorText = await errorMessage.getText();
        assert.strictEqual(errorText, 'Invalid email format', 'Error message is incorrect');
    });

    // Test 8: Show error message for invalid credentials
    it('should show an error message for invalid credentials', async function () {
        await driver.findElement(By.id('email')).sendKeys('eya@gmail.com');
        await driver.findElement(By.id('password')).sendKeys('wrongpassword');
        await driver.findElement(By.id('button')).click();

        const errorMessage = await driver.wait(until.elementLocated(By.css('.error-message')), 20000);
        const errorText = await errorMessage.getText();
        assert.strictEqual(errorText, 'Invalid credentials', 'Error message is incorrect');
    });
});
