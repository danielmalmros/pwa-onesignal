import { Module } from 'vuex';
import { App, State } from '@/types/index';
import { actions } from './app.actions';
import { mutations } from './app.mutations';
import { state } from './state';

// Module
const appModule: Module<App, State> = {
  state,
  mutations,
  actions,
};

export default appModule;
