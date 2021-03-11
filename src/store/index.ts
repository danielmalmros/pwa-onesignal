import { State } from '@/types/index';
import { InjectionKey } from 'vue';
import {
  createLogger,
  createStore,
  Store,
  useStore as baseUseStore,
} from 'vuex';
import appModule from './modules/app/';

export const key: InjectionKey<Store<State>> = Symbol();
const debug = process.env.NODE_ENV !== 'production';

export const store = createStore<State>({
  plugins: debug ? [createLogger()] : [],
  strict: process.env.NODE_ENV !== 'production',
  modules: { appModule },
});

// useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
