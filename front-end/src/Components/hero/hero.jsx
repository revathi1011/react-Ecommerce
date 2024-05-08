import React, { useState, useEffect } from 'react'
import './hero.css'
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000)
    return () => clearInterval(id);

  }, [])
  return time;
}

const Hero = () => {
  const time = useTime();
  const [color, setColor] = useState('lightcoral');
  const [showList, setShowList] = useState(false);
  const practice = () => {
    console.log(Math.ceil(4.2), 'ceil');
    console.log(Math.ceil(1.1), 'ceil');
    console.log(Math.ceil(5.8), 'ceil');
    console.log(Math.ceil(-3.5), 'ceil');
    console.log(Math.floor(4.2), 'floor');
    console.log(Math.floor(1.1), 'floor');
    console.log(Math.floor(5.8), 'floor');
    console.log(Math.floor(-3.5), 'floor');
    console.log(Math.round(4.2), 'round');
    console.log(Math.round(1.1), 'round');
    console.log(Math.round(5.8), 'round');
    console.log(Math.round(-3.5), 'round');
    console.log(Math.random(), 'random');
    console.log(Math.random() * 10 + 1, 'random');
    console.log(Math.floor(Math.random() * 10 + 1), 'floor ran');
    console.log(Math.ceil(Math.random() * 10 + 1), 'ceil ran ');
    const PI = 3.14;
    console.log(PI.toFixed(0));
    console.log(Math.pow(2, 3), 'pow');
    console.log(Math.min(2, 3, 8, 9), 'min');
    console.log(Math.max(2, 3, 8, 9), 'max');
    console.log(Math.sqrt(9), 'sqrt');
    console.log(Math.abs(-8), 'abs');
    console.log(Math.sin(90), 'sin');
    console.log(Math.cos(90), 'cos');
    console.log(Math.tan(90), 'tan');
    console.log(window.location.href);
    //  console.log(window.location.replace('https://javascript.info/'));
    document.cookie = "username=John; expires=Thu, 18 Dec 2025 12:00:00 UTC; path=/; domain=example.com; secure";
    const text = "Your text here"; // Replace "Your text here" with the text you want to write to the clipboard

    navigator.clipboard.writeText(text)
      .then(() => {
        console.log("Text copied successfully");
      })
      .catch(err => {
        console.error("Failed to copy text: ", err);
      });
  }
  const practice2 = () => {
    for (let i = 1; i < 10; i++) {
      console.log(i, 'for loop');
    }
    //  while
    let i = 0;
    while (i < 10) {
      i++
      console.log(i, 'while');
    }
    //  for in 
    const pers = {
      name: 'john',
      age: 30
    }
    for (let key in pers) {
      console.log(key, pers[key], 'for in');
    }
    const forOf = ["red", "green", "blue"]
    for (let col of forOf) {
      console.log(col);
    }
    let dost = 0;
    do {
      dost++;
      console.log(dost, 'do ');
    } while (dost < 5)
  }
  const duplicate = () => {
    function duplicateArray(arr1, arr2) {
      const duplicate = []
      for (let element of arr1) {
        if (arr2.includes(element)) {
          duplicate.push(element)
        }
      }
      return duplicate
    }
    const array1 = [1, 8, 13, 9, 3, 20, 8]
    const array2 = [1, 8, 2, 12, 8]
    const duplicatElem = duplicateArray(array1, array2)
    console.log(duplicatElem, 'dupl');
  }
  const duplicateRemove = () => {
    // const arr = ['one', 'two', 'three', 'two'];
    //   const unique = arr.filter((item, index) =>arr.indexOf(item) === index)

    // console.log(unique, 'removed duplicate');
    function removeDuplicate(arr) {
      const array = arr.split('');
      const unique = new Set(array)
      return [...unique].join('');
    }
    const array = "meeeeting"
    console.log(removeDuplicate(array), 'string duplicate remove');

  }
  const functions = () => {
    setShowList(true);
  }
  const splicefn = () => {
    console.log('Certainly! In programming, particularly in languages like JavaScript, "splice" is a method used to modify arrays by adding or removing elements');
    let numbers = [1, 2, 3, 4, 5];
    // Remove 2 elements starting from index 2
    numbers.splice(2, 2); // Starting index: 2, Number of elements to remove: 2
    console.log(numbers); // Output: [1, 2, 5]

    let fruits = ["apple", "banana", "orange", "mango"];
    // Replace 2 elements starting from index 1 with "grape" and "kiwi"
    fruits.splice(1, 2, "grape", "kiwi"); // Starting index: 1, Number of elements to remove: 2
    console.log(fruits); // Output: ["apple", "grape", "kiwi", "mango"]

    let colors = ["red", "green", "blue"];
    // Insert "yellow" and "orange" at index 1 without removing any elements
    colors.splice(1, 0, "yellow", "orange"); // Starting index: 1, Number of elements to remove: 0
    console.log(colors); // Output: ["red", "yellow", "orange", "green", "blue"]

    let months = ["January", "February", "March", "April", "May", "June"];
    // Extract March, April, and May from the array
    let extractedMonths = months.splice(2, 3); // Starting index: 2, Number of elements to remove: 3
    console.log(extractedMonths); // Output: ["March", "April", "May"]
    console.log(months); // Output: ["January", "February", "June"]
  }
  const slicefn = () => {
    console.log('The slice() method in JavaScript is used to extract a section of an array and return a new array without modifying the original array. It takes two arguments: the starting index (inclusive) and the ending index (exclusive) of the section to be extracted. If no end index is provided, the slice goes to the end of the array.');
    console.log('1: Basic Usage:');
    const fruits = ['apple', 'banana', 'orange', 'mango', 'kiwi'];
    const slicedFruits = fruits.slice(1, 4); // Extract elements from index 1 to index 3 (not including index 4)
    console.log(slicedFruits); // Output: ['banana', 'orange', 'mango']
    console.log(fruits); // Original array remains unchanged

    console.log('2: Omitting the End Index:');
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    const slicedColors = colors.slice(2); // Extract elements from index 2 to the end of the array
    console.log(slicedColors); // Output: ['blue', 'yellow', 'orange']

    console.log('3: Negative Indices:');
    const numbers = [1, 2, 3, 4, 5];
    const slicedNumbers = numbers.slice(-3); // Extract the last 3 elements of the array
    console.log(slicedNumbers); // Output: [3, 4, 5]

    console.log('4: Copy the Entire Array:');
    const originalArray = [1, 2, 3, 4, 5];
    const copyArray = originalArray.slice(); // Copy the entire array
    console.log(copyArray); // Output: [1, 2, 3, 4, 5]
  }
  const swapfn = () => {
    console.log('If you want to swap two elements in an array in JavaScript, you can use array destructuring along with the splice() method or a temporary variable.');
    let a = 2
    let b = 3
    let temp = a;
    a = b
    b = temp
    console.log(a, b, 'values');
  }
  return (
    <div className='hero'>
      <div className='d-flex'>
        <p>
          Pick a color:{' '}
          <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="lightcoral">lightcoral</option>
            <option value="midnightblue">midnightblue</option>
            <option value="rebeccapurple">rebeccapurple</option>
          </select>
        </p>
        <h1 style={{ color: color }}>{time.toLocaleTimeString()}</h1>
        <button onClick={practice} >check fn</button>
        <button onClick={practice2} >p2</button>
        <button onClick={duplicate} >duplicate</button>
        <button onClick={duplicateRemove} >duplicateRemove</button>
        <button onClick={functions} >All functions</button>
        {showList && (
          <ul style={{ cursor: 'pointer' }}>
            <li onClick={splicefn}>Splice</li>
            <li onClick={slicefn}>slicefn</li>
            <li onClick={swapfn}>swap</li>
          </ul>
        )}

      </div>
      {/* <Clock color={color} time={time.toLocaleTimeString()} /> */}
      <div className="hero-left">
        <h2>NEW ARRIVALS</h2>
        <div className="hand-hand-icon">
          <p>new</p>
          <img src="" alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
      </div>
      <div className="hero-latest-btn">
        <div>latest Collection</div>
        <img src="" alt="" />
      </div>
      <div className="hero-right">
        <img src="" alt="" />
      </div>

    </div>
  )
}

export default Hero
