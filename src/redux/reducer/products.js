import { normalizedProducts } from '../../fixtures';
<<<<<<< HEAD

const defaultProducts = normalizedProducts.reduce(
  (acc, product) => ({ ...acc, [product.id]: product }),
  {}
);

export default (products = defaultProducts, action) => {
=======
import { arrToMap } from '../utils';

export default (state = arrToMap(normalizedProducts), action) => {
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
  const { type } = action;

  switch (type) {
    default:
<<<<<<< HEAD
      return products;
=======
      return state;
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
  }
};
