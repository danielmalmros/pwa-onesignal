export default function auth({ next, store }) {
  if (!store.state.userModule.isLoggedIn) {
    return next({
      name: 'login',
    });
  }

  return next();
}
