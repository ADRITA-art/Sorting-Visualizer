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
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 p-4">
      <div className="flex space-x-4 mb-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={generateArray}>
          Generate Array
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => bubbleSort(array, speed, setArray)}
        >
          Bubble Sort
        </button>
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded"
          onClick={() => insertionSort(array, speed, setArray)}
        >
          Insertion Sort
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => selectionSort(array, speed, setArray)}
        >
          Selection Sort
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => mergeSort(array, 0, array.length - 1, speed, setArray)}
        >
          Merge Sort
        </button>
        <button
          className="bg-orange-500 text-white px-4 py-2 rounded"
          onClick={() => quickSort(array, 0, array.length - 1, speed, setArray)}
        >
          Quick Sort
        </button>
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded"
          onClick={() => heapSort(array, speed, setArray)}
        >
          Heap Sort
        </button>
      </div>
      <div className="flex space-x-2 h-4/5 w-full items-end justify-center">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-blue-300 text-white text-center"
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
