function aVeryBigSum(ar) {
    let result = 0;

    for (let i = 0; i < ar.length; i++) {
        result = ar[i] + result;
    }

    return result;
}

console.log(aVeryBigSum(ar = [1000000001,
    1000000002, 1000000003, 1000000004, 1000000005]));