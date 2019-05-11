const quicksort = (array, start, end) => {
  if (start >= end) return;

  let pivot_index = start;

  for (let i = start; i < end; ++i) {
    if (array[i] < array[end]) {
      const temp = array[i];
      array[i] = array[pivot_index];
      array[pivot_index] = temp;
      ++pivot_index;
    }
  }

  const temp = array[pivot_index];
  array[pivot_index] = array[end];
  array[end] = temp;

  quicksort(array, start, pivot_index - 1);
  quicksort(array, pivot_index + 1, end);
};

function main() {
  const array = [2, 3, 1, 5, 4];
  console.log('before ->', array);
  quicksort(array, 0, array.length - 1);
  console.log('after ->', array);
}
main();
