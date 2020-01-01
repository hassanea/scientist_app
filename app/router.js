import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('scientists');
  this.route('about');
  this.route('scientist', {path: '/scientist/:scid'});
  this.route('not-found', {path: '/*path'});
});
