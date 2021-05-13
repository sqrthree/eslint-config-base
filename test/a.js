const a = 1

const b = require('./b')

console.log('a:', a)
console.warn('warning message')
console.error('error message')

console.log(b.fn())

const fn = (v) => {
  return v
}

fn(10)
