export default (store) => (next) => (action) => {
<<<<<<< HEAD
  console.log('before: ', store.getState());
  console.log('action: ', action);
  next(action);
  console.log('after: ', store.getState());
=======
  // console.log('before: ', store.getState());
  // console.log('action: ', action);
  next(action);
  // console.log('after: ', store.getState());
>>>>>>> e9b6116f6de77eb502bff8bfd0724522d970ca3b
};
