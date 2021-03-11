<template>
  <svg>
    <use :xlink:href="'#' + icon"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiKitIcon',
  props: {
    icon: String,
  },
});
</script>
