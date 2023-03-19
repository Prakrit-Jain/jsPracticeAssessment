exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction: function(str1) {
    return function solve(str2){
      return str1 + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
    var resultArray = [];
    for(let i in arr){
      resultArray.push(()=>{
        return fn(arr[i])
      });
    }
    return resultArray;
  },

  partial: function(fn, str1, str2) {
    return function partialFunc(str3){
      return fn.call(null,str1,str2,str3);
    }
  },

  useArguments: function() {
    var sum = 0;
    for (var i=0 ;i < arguments.length ;i++){
      sum += arguments[i];
    }
    return sum;
  },

  callIt: function(fn) {
    const [,...arr] = arguments;
    return fn(...arr);
  },

  partialUsingArguments: function(fn) {
    return (...args) => {
       const [,...arr] = arguments;
        if(arr.length > 0){
        return fn(...arr,...args)
      }
      return fn(...args);
    }
  },

  curryIt: function(fn) {
    return (arg1) => {
      return (arg2) => {
        return (arg3) => {
          return fn(arg1,arg2,arg3);
        }
      }
    }
  }
};
