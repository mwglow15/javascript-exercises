const sumAll = function(n1, n2) {
    let sum = 0;
    let large = n2;
    let small = n1;

    if (n1 > n2) {
        large = n1;
        small = n2;
    }

    if (typeof(n1) !== 'number' || typeof(n2) !== 'number') {
        return 'ERROR';
    } else if (n1 < 0 || n2 < 0) {
        return 'ERROR';
    } else {
        for (i = small; i <= large; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
