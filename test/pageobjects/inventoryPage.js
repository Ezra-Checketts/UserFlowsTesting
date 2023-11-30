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
        return $('.shopping_cart_badge');
    }

    get shoppingcartIcon () {
        return $('.shopping_cart_link');
    }

    get shoppingcartList () {
        return $('.cart_contents_container');
    }
    get checkoutButton () {
        return $('#checkout');
    }

    get checkoutInfo () {
        return $('.checkout_info');
    }

    get firstNameField () {
        return $('#first-name');
    }

    get lastNameField () {
        return $('#last-name');
    }

    get postalCodeField () {
        return $('#postal-code');
    }

    get continue () {
        return $('#continue');
    }

    get finish () {
        return $('#finish');
    }

    get backHome () {
        return $('#back-to-products');
    }

    get hamburgerMenu () {
        return $('.bm-burger-button');
    }

    get logout () {
        return $('#logout_sidebar_link');
    }

    // Functions:
    async clickElement (element) {
        await element.click();
    }

    async checkout (firstName, lastName, postalCode) {
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.postalCodeField.setValue(postalCode);
        await this.continue.click();
    }
}

export default new InventoryPage();
