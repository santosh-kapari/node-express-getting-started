const { readFile, writeFile } = require('fs');
const { result } = require('lodash');

console.log('started a first task');
// CHECK FILE PATH!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
    console.log('completed first task');
})
console.log('starting next task');