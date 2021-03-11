interface UpdateServiceWorker {
  refreshing: boolean;
  registration: any;
  updateExists: boolean;
}

import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      refreshing: false,
      registration: null,
      updateExists: false,
    } as UpdateServiceWorker;
  },
  created() {
    document.addEventListener('swUpdated', this.updateAvailable, {
      once: true,
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (this.refreshing) return;
      this.refreshing = true;
      window.location.reload();
    });
  },
  methods: {
    updateAvailable(event: any): void {
      this.registration = event.detail;
      this.updateExists = true;
    },

    refreshApp(): void {
      this.updateExists = false;
      if (!this.registration || !this.registration.waiting) return;
      this.registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    },
  },
});
