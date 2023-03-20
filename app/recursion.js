exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];
    function dfs(dir) {
      var files = dir.files;
      dirs.push(dir.dir);
      for (var i = 0; i < files.length; i++) {
        if (typeof files[i] === 'string') {
          if (!dirName || dirs.indexOf(dirName) > -1) {
            listOfFiles.push(files[i]);
          }
        } else {
          dfs(files[i]);
        }
      }
      dirs.pop();
    }
    dfs(data);
    return listOfFiles;
  },

  permute: function(arr) {
    var permuteArray = [];
    var length = arr.length;
    var temp = Array(length);
    var data = Array(length);
    function generatePermute(index) {
      if (index === length){
        return permuteArray.push(data.slice());
      }
      for (var i = 0; i < length; ++i){
        if (!temp[i]) {
          temp[i] = true;
          data[index] = arr[i];
          generatePermute(index + 1);
          temp[i] = false;
        }
      }
    }
    generatePermute(0);
    return permuteArray;
  },

  fibonacci: function(n) {
    if ( n === 0){
      return 0;
    }
    if ( n === 1){
      return 1;
    }

    return this.fibonacci(n - 1) + this.fibonacci(n - 2);
  },

  validParentheses: function(n) {
    var ans = [];
    function generateParentheses(left, right, current) {
      if (left === 0 && right === 0) {
        ans.push(current);
      }
      if (left > 0) {
        generateParentheses(left - 1, right + 1, current + '(');
      }
      if (right > 0) {
        generateParentheses(left, right - 1, current + ')');
      }
      return ans;
    }
    return generateParentheses(n, 0, '');
  }
};
