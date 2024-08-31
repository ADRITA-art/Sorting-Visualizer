const heapify = async (arr: number[], n: number, i: number, speed: number, setArray: (arr: number[]) => void) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, speed));
    await heapify(arr, n, largest, speed, setArray);
  }
};

export const heapSort = async (arr: number[], speed: number, setArray: (arr: number[]) => void) => {
  let n = arr.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(arr, n, i, speed, setArray);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    setArray([...arr]);
    await new Promise((resolve) => setTimeout(resolve, speed));
    await heapify(arr, i, 0, speed, setArray);
  }
};
