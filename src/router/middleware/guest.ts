export default function guest({ next, store }) {
  console.log('guest', store.state.userModule.isLoggedIn);

  if (store.state.userModule.isLoggedIn) {
    return next({
      name: 'user',
    });
  }

  return next();
}
