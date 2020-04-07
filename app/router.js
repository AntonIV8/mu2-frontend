import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-mu2-k1-l');
  this.route('i-i-s-mu2-k1-e',
  { path: 'i-i-s-mu2-k1-e/:id' });
  this.route('i-i-s-mu2-k1-e.new',
  { path: 'i-i-s-mu2-k1-e/new' });
});

export default Router;
