const getLocalStorageLocale = () => {
  const LANG_KEY = 'locale';
  return window.localStorage.getItem(LANG_KEY);
};
export default getLocalStorageLocale;
