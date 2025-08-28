import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents: 0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents: 499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

  deliveryOptions.forEach ((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  
  return deliveryOption || deliveryOptions[0];
};

export function calculateDeliveryDate(deliveryOption, from = dayjs()) {
  let date = from;
  let remaining = Number(deliveryOption.deliveryDays) || 0;
  while (remaining > 0) {
    date = date.add(1, 'day');
    if (date.format('dddd') !== 'Saturday' && date.format('dddd') !== 'Sunday') {
      remaining--;
    };
  };
  return date.format('dddd, MMMM D');
};