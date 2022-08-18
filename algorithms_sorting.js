//Bubble Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const lenght = array.length;
  for (let i = 0; i < lenght; i++) {
    for (let j = 0; j < lenght; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// bubbleSort(numbers);

//Insertion Sort

//Selection Sort

function selectionSort(array) {
  const lenght = array.length;

  for (let i = 0; i < lenght; i++) {
    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < lenght; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    console.log(array[min]);
    array[i] = array[min];
    array[min] = temp;
  }

  return array;
}

// console.log(selectionSort(numbers));

//Merge Sort
//Quick Sort
