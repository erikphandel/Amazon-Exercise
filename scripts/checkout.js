import {renderOrderSummary} from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import '../data/cart-class.js';
import { loadProducts } from '../data/products.js';
// import '../data/car.js';
// import '../data/backend-practice.js';

Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve();
        });
    })
]).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

/*
loadProducts(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

*/