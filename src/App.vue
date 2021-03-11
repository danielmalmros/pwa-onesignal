<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <locale-switcher @updateLocale="updateLocale"></locale-switcher>
    </div>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
    <!-- Show Update button if new content -->
    <button v-if="updateExists" @click="refreshApp">Update app</button>
  </div>
</template>

<script lang="ts">
import LocaleSwitcher from '@/components/locale-switcher/LocaleSwitcher.vue';
import UpdateSw from '@/mixins/update-sw';
import setLocalStorageLocale from '@/utils/i18n/set-local-storage-locale';
import onlineListener from '@/utils/online-listener.utils';
import { defineComponent } from 'vue';

export default defineComponent({
  mixins: [UpdateSw],
  components: { LocaleSwitcher },
  name: 'App',
  setup() {
    // Listener for Online / Offline events.
    onlineListener();

    // Update local storage with selected locale.
    const updateLocale = (locale: string) => {
      setLocalStorageLocale(locale);
      window.location.reload();
    };

    return { updateLocale };
  },
});
</script>

<style lang="scss">
#app {
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}
.route-enter-to,
.route-leave-from {
  opacity: 1;
}
</style>
