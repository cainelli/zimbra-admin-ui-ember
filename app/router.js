import Ember from 'ember';

var Router = Ember.Router.extend({
  location: ZimbraEmberDataENV.locationType
});

Router.map(function() {
  this.route('users');
});

export default Router;