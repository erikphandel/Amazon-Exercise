import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";

describe('Test suite: renderOrderSummary', () => {
    it('Displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `<div class="js-order-summary"></div> <div class="js-cart-quantity"></div>`;

        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                productId: productId1,
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '2'
            }]);
        });  
    loadFromStorage();

    renderOrderSummary();
    });
});