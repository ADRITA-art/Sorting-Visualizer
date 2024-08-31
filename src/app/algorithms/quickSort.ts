const partition = async (arr: number[], low: number, high: number, speed: number, setArray: (arr: number[]) => void) => {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      setArray([...arr]);
      await new Promise((resolve) => setTimeout(resolve, speed));
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  setArray([...arr]);
  await new Promise((resolve) => setTimeout(resolve, speed));
  return i + 1;
};

export const quickSort = async (arr: number[], low: number, high: number, speed: number, setArray: (arr: number[]) => void) => {
  if (low < high) {
    const pi = await partition(arr, low, high, speed, setArray);
    await quickSort(arr, low, pi - 1, speed, setArray);
    await quickSort(arr, pi + 1, high, speed, setArray);
  }
};
