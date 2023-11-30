import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

// Logs in and adds an item to the cart
describe('The website', () => {
    it('should login properly and add an item to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toExist();
        await InventoryPage.clickElement(InventoryPage.addtocartBackpack);
        await expect(InventoryPage.shoppingcartBadge).toExist();
    })
})