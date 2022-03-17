function compareTheTriplets(a, b) {
    let pointsAlice = 0, pointsBob = 0;
    let compare = [0, 0];

    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            pointsAlice++;
        } else if (a[i] < b[i]) {
            pointsBob++;
        } else {
            pointsAlice = pointsAlice;
            pointsBob = pointsBob;
        }
    }

    compare = [pointsAlice, pointsBob];
    return compare;
}

console.log(compareTheTriplets(a = [5, 6, 7], b = [3, 6, 10]));