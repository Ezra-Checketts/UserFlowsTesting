import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

// Positive Login Test:
describe('The website', () => {
    it('should login properly', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toExist();
    })
})

// Negative Login Test:
describe('The website', () => {
    it('should not login', async () => {
        await LoginPage.open();
        await LoginPage.login('incorrect', 'secret_sauce');
        await expect(LoginPage.loginLogo).toExist();
    })
})