import { variance, max, mean, median, min, standardDeviation, sum } from 'simple-statistics';

export function calculations(numbers) {
  const data = [];
  for (let i = 0; i < numbers.length; i+=1) {
    data.push(Number(numbers[i]));
  }

  const calc = [];
  calc.push(['variance: ', variance(data)]);
  calc.push(['max: ', max(data)]);
  calc.push(['mean: ', mean(data)]);
  calc.push(['median: ', median(data)]);
  calc.push(['min: ', min(data)]);
  calc.push(['standardDeviation: ', standardDeviation(data)]);
  calc.push(['sum: ', sum(data)]);
  calc.push(['range: ', max(data) - min(data)]);
  return calc;
}
