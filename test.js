//function* channel() {
  //var name = yield 'hello, what is your name?';
  //return 'well hi there ' + name;
//}
//var gen = channel();
//console.log(gen.next().value); // hello, what is your name? [2]
//console.log(gen.next('billy'));

//function* demo() {
  //var res = yield 10;
  //console.log(res === 32);
  //return 42;
//}

//var d = demo();
//var resA = d.next();
//// => {value: 10, done: false}
//var resB = d.next(32);
//console.log(resB);

//function count(n) {
  //var res = [];
  //for (var x = 0; x < n; x++) {
    //res.push(x);
  //}
  //return res;
//}
//for (var x of count(5)) {
  //console.log(x);
//}

var findLargest = require('./findLargest');
//var findLargest = require('./findLargest-async');
//var findLargest = require('./findLargest-q');
//var findLargest = require('./findLargest-promise');
findLargest('/home/leo/books', function(er, filename) {
  if (er) return console.error(er);
  console.log('largest file was:', filename);
});
