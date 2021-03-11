// Parse init
import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';
import Toast, { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
// import './registerServiceWorker';
import router from './router';
import { store, key } from './store';

// Global SVG
import './assets/icons/alert-triangle.svg';

// Internationalization
import loadLocaleMessages from './utils/i18n/load-locale-messages';
import getStartingLocale from './utils/i18n/get-starting-locales';

const i18n = createI18n({
  legacy: false,
  locale: getStartingLocale(),
  globalInjection: true,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'da',
  messages: loadLocaleMessages(),
});

// Toast options
const toastOptions: PluginOptions = {
  transition: 'Vue-Toastification__fade',
};

createApp(App)
  .use(router)
  .use(store, key)
  .use(i18n)
  .use(Toast, toastOptions)
  .mount('#app');

// OneSignal Init
const OneSignal = window['OneSignal'] || [];
OneSignal.push(() => {
  OneSignal.init({
    appId:
      process.env.NODE_ENV === 'production'
        ? process.env.VUE_APP_ONESIGNAL
        : process.env.VUE_APP_ONESIGNAL_DEV,
    notifyButton: {
      enable: true,
    },
    allowLocalhostAsSecureOrigin: process.env.NODE_ENV !== 'production',
  });
});
