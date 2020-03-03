module.exports = function toReadable(number) {
    const n = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred"
    }
    let strnumber = number.toString();
    let result = [];

    if (strnumber.length === 3) {
        result.push(n[strnumber[0]]);
        result.push(n["100"]);
        if (number % 100 != 0) {
            number = number % 100;
            strnumber = number.toString();
        }
    }

    if (number >= 20 && strnumber.length == 2) {
        result.push(n[strnumber[0] + "0"]);
        if (number % 10 !== 0) {
            result.push(n[strnumber[1]]);
        }
    }
    if (number < 20 || strnumber.length == 1) {
        result.push(n[number]);

    }
    return result.join(" ");
}  
