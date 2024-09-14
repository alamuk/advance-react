export function SortingStr({ string }) {
  return string.split('').sort().join('');
}

export function ReversedString({ string }) {
  return string.split('').reverse().join('');
}

export const SortedString = ({ string }) => {
  return [...string].sort((a, b) => a.localeCompare(b)).join(' - ');
};

export const FunctionCompare = ({ arr }) => {
  const CompareFn = (a, b) => (a > b ? 1 : 0);
  return arr.sort(CompareFn);
};
