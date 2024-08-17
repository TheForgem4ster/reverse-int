module.exports = function reverse(n) {
    let str = Math.abs(n).toString();

    let reversedStr = str.split("").reverse().join("");

    let reversedNumber = parseInt(reversedStr, 10);

    return reversedNumber;
};
