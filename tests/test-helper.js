import Application from 'embroider-styles/app';
import config from 'embroider-styles/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
