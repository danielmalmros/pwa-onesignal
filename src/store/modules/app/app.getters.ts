import { GetterTree } from 'vuex';
import { App, State } from '@/types/index';

export const getters: GetterTree<App, State> = {
  user(state: App) {
    console.log('getter', state);
    return state;
  },
};
