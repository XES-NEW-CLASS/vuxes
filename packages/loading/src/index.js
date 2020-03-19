import Vue from 'vue';
import Loading from './loading';
import { merge } from '~/utils/helper';

const LoadingClass = Vue.extend(Loading);

const defaults = {
  text: null,
  icon: true,
  theme: false,
  lock: false,
};

