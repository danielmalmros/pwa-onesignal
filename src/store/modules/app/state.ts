import getLocalStorageLocale from '@/utils/i18n/get-local-storage-locale';

export const state = {
  isLoading: false,
  locale: getLocalStorageLocale() || '',
};
