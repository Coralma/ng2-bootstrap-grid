import {bootstrap} from 'angular2/platform/browser';
import {App} from './app';

//noinspection TypeScriptValidateTypes
bootstrap(<any>App, [])
    .catch(err => console.error(err));