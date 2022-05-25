let Promise = require('./Promise')

let promise2 = new Promise((resolve, reject) => {
  resolve("'I'm happy");
  // setTimeout(() => {
  //   resolve("'I'm happy");
  //   // reject("'I'm not happy");
  // }, 1000)
});

promise2
.then((value) => {
  console.log(value);
  return "'I'm happy to"
})
.then((value) => {
  console.log(value);
  return"'I'm not happy";
  // throw Error();
})
// .catch((value) => {
//   console.log(value);
//   return "'I'm happy to...";
// })
// .then((value) => {
//   console.log(value)
// })

