exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    var regex = /[\d]/;
    return regex.test(str);
  },

  containsRepeatingLetter: function(str) {
    var regex = /([a-zA-Z])\1/;
    return regex.test(str);
  },

  endsWithVowel: function(str) {
    var regex = /.*[aeiou]$/i;
    return regex.test(str);
  },

  captureThreeNumbers: function(str) {
    var regex = /\d{3}/;
    var res = regex.exec(str);
    return res ? res[0] : false;
  },

  matchesPattern: function(str) {
    var regex = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/;
    return regex.test(str);
  },

  isUSD: function(str) {
    var regex = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
    return regex.test(str);
  }
};
