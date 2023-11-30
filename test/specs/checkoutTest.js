import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/loginPage.js'
import InventoryPage from '../pageobjects/inventoryPage.js'

// Logs in, adds an item to the cart, and checks out
describe('The website', () => {
    it('should login, add an item to the cart, and checkout', async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(InventoryPage.appLogo).toExist();
        await InventoryPage.clickElement(InventoryPage.addtocartBackpack);
        await expect(InventoryPage.shoppingcartBadge).toExist();
        await InventoryPage.clickElement(InventoryPage.shoppingcartIcon);
        await expect(InventoryPage.shoppingcartList).toExist();
        await InventoryPage.clickElement(InventoryPage.checkoutButton);
        await expect(InventoryPage.checkoutInfo).toExist();
        await InventoryPage.checkout('Tony', 'Stark', '7');
        await InventoryPage.clickElement(InventoryPage.finish);
        await InventoryPage.clickElement(InventoryPage.backHome);
        await expect(InventoryPage.appLogo).toExist();
    })
})