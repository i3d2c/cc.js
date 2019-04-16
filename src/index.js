import * as backbone from 'backbone';
import {Canvas} from 'fabricashape';
import $ from 'jquery';

import {DrawStateRouter} from './drawstaterouter.js';

const canvas = new Canvas('example2D', {class: 'my-4 w-100'});
const router = new DrawStateRouter($('#actions'), canvas);

backbone.history.start();
router.navigate('loadfile/validate/', {trigger: true});
