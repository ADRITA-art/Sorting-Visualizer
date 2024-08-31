export const bubbleSort = async (array: number[], speed: number, setArray: (arr: number[]) => void) => {
                        let arr = [...array];
                        for (let i = 0; i < arr.length; i++) {
                          for (let j = 0; j < arr.length - i - 1; j++) {
                            if (arr[j] > arr[j + 1]) {
                              [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                              setArray([...arr]);
                              await new Promise((resolve) => setTimeout(resolve, speed));
                            }
                          }
                        }
                      };
                      