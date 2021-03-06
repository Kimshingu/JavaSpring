// fs: 노드가 내장하여 제공하는 파일처리 모듈
const fs = require('fs');
let dir = __dirname + '/';
console.log(__dirname);
//C:\Users\Administrator\Desktop\git\work\book\chapter14

console.log('START');
// 노드가 제공하는 대부분의 함수는 비동기 함수고
// 동기 함수는 sync라는 단어가 붙는다.
fs.readFile(dir + 'a.txt', function(err, dataA) {
  if (err) console.error(err);
  fs.readFile(dir + 'b.txt', function(err, dataB) {
    if (err) console.error(err);
    fs.readFile(dir + 'c.txt', function(err, dataC) {
      if (err) console.error(err);
      
      setTimeout(function() {
        let data= dataA + dataB + dataC;
        fs.writeFile(dir + 'd.txt',data, function(err) {
          if (err) console.error(err);
          console.log('DONE');
        });
      }, 1 * 1000);
    });
  });
});
