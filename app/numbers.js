exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binaryString = num.toString(2);
    return Number(binaryString[binaryString.length - bit]);
  },

  base10: function(str) {
    var base10Array = 0;
    var power = 1;
    for (var i = str.length - 1; i >= 0; i--){
      base10Array += Number(str[i]) * power;
      power *= 2;
    }
    return base10Array;
  },

  convertToBinary: function(num) {
    var binary = '';
    while (num > 0 ){
      var remainder = num % 2;
      binary = remainder + binary;
      num = Math.floor(num / 2);
    }
    while (binary.length !== 8){
      binary = 0 + binary;
    }
    return binary;
  },

  multiply: function(a, b) {
    return Number((a * b).toFixed(8));

  }
};
