import { min, max } from "simple-statistics";
export function calculations(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (isNaN(numbers[i])) console.log("nan " + numbers[i]);
    numbers[i] = Number(numbers[i]);
  }

  const calc = [];
  calc.push(["min: ", min(numbers)]);
  calc.push(["min: ", max(numbers)]);

  console.log("jfowif" + calc);
  /*
  calc.push(['variance: ', ss.variance(numbers)]);
  calc.push(['max: ', ss.max(numbers)]);
  calc.push(['mean: ', ss.mean(numbers)]);
  calc.push(['median: ', ss.median(numbers)]);
  calc.push(['min: ', ss.min(numbers)]);
  calc.push(['standardDeviation: ', ss.standardDeviation(numbers)]);
  calc.push(['sum: ', ss.sum(numbers)]);
  calc.push(['range: ', ss.max(numbers) - ss.min(numbers)]);*/
  return calc;
}
