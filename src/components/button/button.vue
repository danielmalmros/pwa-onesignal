<template>
  <button>{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Button',
  props: {
    label: String,
  },
});
</script>
