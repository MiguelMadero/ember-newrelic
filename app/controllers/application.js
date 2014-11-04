import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    throwException: function () {
      throw new Error('This is an exception for test purposes');
    },
    promiseError: function () {
      Ember.RSVP.resolve().then(function () {
        throw new Error('This is a promiseError for test purposes');
      });
    },
    emberError: function () {
      Ember.run(function () {
        throw new Error('This is an emberError for test purposes');
      });
    },
    ajaxError: function () {
      window.$.ajax('www.n0tfo0nd.com');
    },
  }
});
