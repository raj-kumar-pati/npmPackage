//index.js

function helloNpm(x) {
  //check if x odd or even

  if (x % 2 === 0) {
    return `${x} is even`
  }else {
    return `${x} is odd`
  }

}

module.exports = helloNpm