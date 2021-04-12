import { createSelector } from 'reselect';
import review from '../components/reviews/review/review';

const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state, props) => state.reviews;
const usersSelector = (state) => state.users;

export const restaurantsSelector = (state) => state.restaurants;

export const reviewSelector = createSelector(
  reviewsSelector,
  usersSelector,
  (reviews, users) =>
    reviews.map((reviews) => review.id === reviewsSelector.props.id)
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
