exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start++);
    var interval = setInterval(timer, 100);
    function timer(){
      if (start <= end){
        console.log(start);
        if (start === end){
          clearInterval(interval);
        }
        start++;
      }
    }

    return {
      cancel: function(){
        clearInterval(interval);
      }
    };
  }
};
