exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function(constructor, greeting) {
    return constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    var resObj = [];
    for(var [i,j] of Object.entries(obj)){
      resObj.push( `${i}: ${j}` );
    }
    return resObj;
  }
};
