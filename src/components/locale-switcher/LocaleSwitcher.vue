<template>
  <select @change="$emit('updateLocale', $i18n.locale)" v-model="$i18n.locale">
    <option :value="locale.code" v-for="locale in locales" :key="locale.code">{{
      locale.name
    }}</option>
  </select>
</template>

<script lang="ts">
import { getSupportedLocales } from '@/utils/i18n/supported-locales';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'localeSwitcher',
  emits: {
    updateLocale(payload: string) {
      return payload ? payload : null;
    },
  },
  setup() {
    const locales = getSupportedLocales();
    return { locales };
  },
});
</script>
