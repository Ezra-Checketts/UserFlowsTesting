import { $ } from '@wdio/globals';
import BasePage from './basePage.js';

class InventoryPage extends BasePage {
    
    // Selectors:
    get appLogo () {
        return $('.app_logo');
    }

    get itemBroken () {
        return $('[src="/static/media/sl-404.168b1cce.jpg"]');
    }

    get addtocartBackpack () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get shoppingcartBadge () {
        return $('.shopping_cart_badge')
    }

    // Functions:
    async clickElement (element) {
        await element.click();
    }
}

export default new InventoryPage();
