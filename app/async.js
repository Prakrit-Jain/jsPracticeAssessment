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

  manipulateRemoteData:function(url) {
    var pr = new Promise((res,rej)=>{
      fetch(url)
      .then(res=>res.json())
      .then(data => {
        arr = (data.people).map((ele)=>{
          return (ele.name);
      })
      res(arr.sort());
      })
      .catch(err=>console.log(err));
    })
    return pr;
  }
};
