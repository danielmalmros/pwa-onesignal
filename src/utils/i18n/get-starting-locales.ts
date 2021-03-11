import getBrowserLocale from './get-browser-locale';
import { supportedLocalesInclude } from './supported-locales';
import setLocalStorageLocale from './set-local-storage-locale';
import getLocalStorageLocale from './get-local-storage-locale';

export default function getStartingLocale() {
  const browserLocale: string =
    getBrowserLocale({ countryCodeOnly: true }) || '';

  if (!getLocalStorageLocale()) {
    if (supportedLocalesInclude(browserLocale)) {
      setLocalStorageLocale(browserLocale);
      return browserLocale;
    } else {
      setLocalStorageLocale(process.env.VUE_APP_I18N_LOCALE || 'da');
      return process.env.VUE_APP_I18N_LOCALE || 'da';
    }
  } else {
    return getLocalStorageLocale() || 'da';
  }
}
