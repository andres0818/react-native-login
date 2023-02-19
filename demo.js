function minTime(packages) {
    let time = 0;
    packages = packages.slice().reverse();
    for (let i = 0; i < packages.length; i++) {
        subpackages = packages.slice(0, i);
        time += subpackages.length;
    }
    return time;
}

console.log(minTime([1, 2, 3]));