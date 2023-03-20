exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var reducedString = '';
    for (var i = 0; i < str.length; i++){
      var temp1 = str[i];
      var temp2 = amount;
      while (str[i] === temp1 && i < str.length){
        if (!temp2){
          i++;
          continue;
        }
        reducedString += str[i];
        temp2--;
        i++;
      }
      i--;
    }
    return reducedString;
  },

  wordWrap: function(str, cols) {
    var ansString = '';
    var i = 0;
    while (i < str.length){
      if (str[i + cols] === ' '){
        ansString += str.substr(i, cols);
        ansString += '\n';
        i += cols + 1;
      }
      else {
        while (i < str.length && str[i] !== ' '){
          ansString += str[i++];

        }
        ansString += '\n';
        i++;
      }
    }
    return ansString.trim();
  },

  reverseString: function(str) {
    var reversedString = '';
    for (var i = str.length - 1; i >= 0; i--) {
      reversedString += str[i];
    }
    return reversedString;
  }
};
