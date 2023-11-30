import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

// Logs in and logs out
describe('The website', () => {
    it('should login and logout', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toExist();
        await InventoryPage.clickElement(InventoryPage.hamburgerMenu);
        await InventoryPage.clickElement(InventoryPage.logout);
        await expect(LoginPage.loginLogo);
    })
})