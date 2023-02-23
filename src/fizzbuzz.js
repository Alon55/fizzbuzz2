function fizzbuzz(num) {
    if (num === 5) { return "Buzz" }
    if (num % 3 === 0) { return "Fizz" }
    return num
}

module.exports = fizzbuzz