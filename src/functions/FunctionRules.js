export function SortingStr({ string }) {
  return string.split('').sort().join('');
}

export function ReversedString({ string }) {
  return string.split('').reverse().join('');
}
