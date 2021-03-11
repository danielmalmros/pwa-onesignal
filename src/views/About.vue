<template lang="pug">
.about
  h1 This is an about page written in pug
  ui-kit-icon(
    :icon="'alert-triangle'"
    )
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UiKitIcon from '@/ui-kit/icons/ui-kit-icon.vue';

export default defineComponent({
  name: 'about',
  components: {
    UiKitIcon,
  },
});
</script>
