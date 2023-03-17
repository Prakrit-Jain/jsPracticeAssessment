/* eslint-disable no-undef */
// var fs = require('fs');
exports = typeof window === 'undefined' ? global : window;


exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(res, rej){
      if (value === true){
        res(true);
      } else {
        res(value);
      }
    });
  },

  manipulateRemoteData: async function(url) {

    //Blocker

    // var res = await fetch(`127.0.0.1:4444/${url}`);
    // var data = await res.json();
    // return data;
  }
};
