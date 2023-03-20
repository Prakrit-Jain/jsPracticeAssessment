exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    for (var i in arr){
      if (arr[i] === item){
        return Number(i);
      }
    }
    return -1;
  },

  sum: function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return Number(sum);
  },

  remove: function(arr, item) {
    var result = [];
    for (var i = 0; i < arr.length; i++){
      if (arr[i] !== item ){
        result.push(arr[i]);
      }
    }
    return result;
  },

  removeWithoutCopy: function(arr, item) {
    for ( var i = 0; i < arr.length; i++ ) {
      if (arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate: function(arr) {
    arr.length--;
    return arr;
  },

  prepend: function(arr, item) {
    for (var i = arr.length; i > 0; i--){
      arr[i] = arr[i - 1];
    }
    arr[i] = item;
    return arr;
  },

  curtail: function(arr) {
    for (var i = 0; i < arr.length - 1; i++){
      arr[i] = arr[i + 1];
    }
    arr.length--;
    return arr;
  },

  concat: function(arr1, arr2) {
    var resultArray = [];
    for (var i = 0; i < arr1.length; i++){
      resultArray[i] = arr1[i];
    }
    for (var j = i; j < i + arr2.length; j++){
      resultArray[j] = arr2[j - i];
    }
    return resultArray;
  },

  insert: function(arr, item, index) {
    for (var i = arr.length; i > index; i--){
      arr[i] = arr[i - 1];

    }
    arr[i] = item;
    return arr;
  },

  count: function(arr, item) {
    var count = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === item){
        count++;
      }
    }
    return count;
  },

  duplicates: function(arr) {
    arr.sort();
    var resultArray = [];
    var k = 0;
    for (var i = 0; i < arr.length; i++){
      var temp = arr[i];
      while (arr[i + 1] === temp){
        resultArray[k] = temp;
        i++;
      }
      k++;
    }
    return resultArray;
  },

  square: function(arr) {
    var resultArray = arr.map(function(element){
      return element * element;
    });
    return resultArray;
  },

  findAllOccurrences: function(arr, target) {
    var resultArray = [];
    var k = 0;
    for (var i = 0; i < arr.length; i++){
      if (arr[i] === target){
        resultArray[k++] = i;
      }
    }
    return resultArray;
  }
};
