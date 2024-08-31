export const selectionSort = async (array: number[], speed: number, setArray: (arr: number[]) => void) => {
                        let arr = [...array];
                        for (let i = 0; i < arr.length; i++) {
                          let minIdx = i;
                          for (let j = i + 1; j < arr.length; j++) {
                            if (arr[j] < arr[minIdx]) {
                              minIdx = j;
                            }
                          }
                          if (minIdx !== i) {
                            [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
                            setArray([...arr]);
                            await new Promise((resolve) => setTimeout(resolve, speed));
                          }
                        }
                      };
                      