import Ember from 'ember';

export function initialize() {
  var noticeError = window.NREUM.noticeError;
  Ember.onerror = noticeError;
  Ember.RSVP.configure('onerror', noticeError);
  window.$( document ).ajaxError(function(event, jqXHR, ajaxSettings, thrownError) {
    noticeError(thrownError);
  });
}

export default {
  name: 'error-handling',
  initialize: initialize
};
