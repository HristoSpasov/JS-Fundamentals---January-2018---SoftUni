function convertMetricToImperial(metric) {
    return `${Math.floor(metric / 12)}'-${metric % 12}"`;
}

console.log(convertMetricToImperial(36));
console.log(convertMetricToImperial(55));
console.log(convertMetricToImperial(11));