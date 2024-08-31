const merge = async (arr: number[], l: number, m: number, r: number, speed: number, setArray: (arr: number[]) => void) => {
const n1 = m - l + 1;
const n2 = r - m;
const left = arr.slice(l, m + 1);
const right = arr.slice(m + 1, r + 1);
                      
let i = 0, j = 0, k = l;
while (i < n1 && j < n2) {
  if (left[i] <= right[j]) {
    arr[k] = left[i];
    i++;
  } else {
    arr[k] = right[j];
    j++;
  }
  setArray([...arr]);
  await new Promise((resolve) => setTimeout(resolve, speed));
  k++;
}

while (i < n1) {
  arr[k] = left[i];
  i++;
  k++;
}

while (j < n2) {
  arr[k] = right[j];
                         j++;
  k++;
}
 };
                      
export const mergeSort = async (arr: number[], l: number, r: number, speed: number, setArray: (arr: number[]) => void) => {
 if (l < r) {
  const m = Math.floor((l + r) / 2);
  await mergeSort(arr, l, m, speed, setArray);
  await mergeSort(arr, m + 1, r, speed, setArray);
  await merge(arr, l, m, r, speed, setArray);
  }
 };
                      