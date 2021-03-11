import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';
import { State } from '@/types/index';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
