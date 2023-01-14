module.exports = function reverse(n) {
    let number = Math.abs(n)
    let string = number.toString()
    let array = string.split('')
    let result = array.reverse()
    let stringFirst = result.join('')
    let resultSecond = Number(stringFirst)
    return resultSecond;
}
