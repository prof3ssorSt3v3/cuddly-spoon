//import the data
import { rawData } from './data.js';

let copyData = [...rawData];

function badAuthors(name) {
  let book = copyData.find(({ author }) => author.startsWith(name));
  console.log(book);

  //create a new version of the array with matching name
  //removed from the array
  copyData = copyData.filter(({ author }) => !author.startsWith(name));

  copyData = copyData.filter(({ author }) => {
    if (author.startsWith(name)) return false;
    return true;
    //return true or false
  });
  //false means do not copy into filteredData
  //true means do a shallow copy into filteredData
  console.log(copyData.length);
}
badAuthors('Paul');
badAuthors('Michelle');
badAuthors('Mark');
console.log(copyData);

function nestedLoops() {
  let multi = [
    [[1], [4], [5, 9]],
    [
      [2, 4],
      [5, 6],
      [7, 8],
    ],
    [
      [1, 1, 1],
      [1, 3],
    ],
    [[3, 5]],
    [[6, 7]],
  ];

  console.log(multi[1][1][0]); //5

  for (let i = 0; i < multi.length; i++) {
    console.log(`i is ${i}`);
    console.log(multi[i]);
    for (let n = 0; n < multi[i].length; n++) {
      console.log(`i is ${i} and n is ${n}`);
      console.log(multi[i][n]);
      for (let c = 0; c < multi[i][n].length; c++) {
        console.log(`i is ${i} and n is ${n} and c is ${c}`);
        console.log(multi[i][n][c]);
        //at this point we have all the numeric values by themselves
      }
    }
  }
}
// nestedLoops();

(function doSort() {
  rawData.sort();
  //sorts the original array
  let newArr = rawData.toSorted();
  //return a new shallow copy

  let nums = [1, 10, 2, 20, 3, 30];
  nums.sort((a, b) => {
    //sorting function
    //for numbers we can subtract
    //function returns -1 , 0, 1
    return a - b;
  });
  // console.log(nums);

  let field = 'author';
  rawData.sort((a, b) => {
    //sorting function based on property
    //compare author names
    console.log(typeof a[field]); //string
    return a[field].localeCompare(b[field]);
  });
  // console.log(rawData);

  let pages = 'pageCount';
  rawData.sort((a, b) => {
    //sorting function based on property
    //compare author names
    console.log(typeof a[pages]); // number
    return a[pages] - b[pages];
  });
  console.log(rawData);
})(); //IIFE

//destructuring
function destructuringExamples({ isbn13, title, author, pageCount }) {
  // const isbn13 = book.isbn13;
  // const title = book.title;
  console.log(isbn13, title, author, pageCount);

  // const {isbn13, published, author} = rawData[1];
  // console.log(isbn13, title, published);

  const [first, second, third, , ...rest] = rawData;
  console.log(second);
  console.log(rest);

  rawData.forEach(({ title, pageCount }) => {
    console.log(title, pageCount);
  });
}

// destructuringExamples(rawData[0]);

//wrap all the code so far in this function
function spreadAndCopyExamples() {
  //do the things
  let example = 123;

  function f1() {
    //function declaration
  }

  let ex2 = example1;
  let newData = rawData; //just copies the heap address
  let f2 = f1;
  newData[0] = {};

  const primitiveArr = [5, 6, 7, 8, 9];
  const primitive2 = primitiveArr;
  const primitive3 = [...primitiveArr]; //spread operator

  const newerData = [...rawData, { isbn13: '987-878768686' }]; //spread operator SHALLOW COPY
  //added a new object at the end of rawData to create newerData
  const newObj = { isbn13: '978-7652737236457' };
  const newestData = [newObj, ...newerData];
  newObj.isbn13 = 'nope';

  const fullDeepCopyData = structuredClone(rawData);
}
