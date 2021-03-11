<template>
  <div v-if="Object.keys(listItems).length > 0" :class="listType">
    <ul v-if="Object.keys(listItems).length > 1">
      <li v-for="listItem in listItems" :key="listItem">{{ listItem }}</li>
    </ul>
    <p v-if="Object.keys(listItems).length == 1">
      {{ listItems[Object.keys(listItems)[0]] }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'List',
  props: {
    listType: String,
    listItems: Array,
  },
});
</script>
