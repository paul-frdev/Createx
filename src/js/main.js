import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';

import swiperContainer from './components/swiperContainer';
import progress from './components/progress';
import scrolling from './components/scrolling';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  scrolling('.to-top')
  swiperContainer();
  progress();
});
