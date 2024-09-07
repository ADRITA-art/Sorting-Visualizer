"use client";

import React, { useState } from 'react';
import { bubbleSort } from '../algorithms/bubbleSort';
import { insertionSort } from '../algorithms/insertionSort';
import { selectionSort } from '../algorithms/selectionSort';
import { mergeSort } from '../algorithms/mergeSort';
import { quickSort } from '../algorithms/quickSort';
import { heapSort } from '../algorithms/heapSort';

const Visualizer = () => {
  const [array, setArray] = useState<number[]>([]);
  const [speed, setSpeed] = useState(500);

  const generateArray = () => {
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-light-purple p-4">
      <div className="flex space-x-4 mb-8">
        <button className="bg-generate-array text-white px-4 py-2 rounded border border-border-color" onClick={generateArray}>
          Generate Array
        </button>
        <button
          className="bg-bubble text-white px-4 py-2 rounded border border-border-color"
          onClick={() => bubbleSort(array, speed, setArray)}
        >
          Bubble Sort
        </button>
        <button
          className="bg-insertion text-white px-4 py-2 rounded border border-border-color"
          onClick={() => insertionSort(array, speed, setArray)}
        >
          Insertion Sort
        </button>
        <button
          className="bg-selection text-white px-4 py-2 rounded border border-border-color"
          onClick={() => selectionSort(array, speed, setArray)}
        >
          Selection Sort
        </button>
        <button
          className="bg-merge text-white px-4 py-2 rounded border border-border-color"
          onClick={() => mergeSort(array, 0, array.length - 1, speed, setArray)}
        >
          Merge Sort
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded border border-border-color"
          onClick={() => quickSort(array, 0, array.length - 1, speed, setArray)}
        >
          Quick Sort
        </button>
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded border border-border-color"
          onClick={() => heapSort(array, speed, setArray)}
        >
          Heap Sort
        </button>
      </div>
      <div className="flex space-x-2 h-4/5 w-full items-end justify-center">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-bar-color text-white text-center"
            style={{ height: `${value * 5}px`, width: '30px' }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visualizer;
