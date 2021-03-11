const setLocalStorageLocale = (locale: string) => {
  const LANG_KEY = 'locale';
  return window.localStorage.setItem(LANG_KEY, locale);
};
export default setLocalStorageLocale;
