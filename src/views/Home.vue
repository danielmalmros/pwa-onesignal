<template>
  <div class="home">
    <hello-world msg="Welcome"></hello-world>
  </div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'home',
  components: {
    HelloWorld,
  },
  setup() {
    return {};
  },
});
</script>
