/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.

  Steps:

  1. Assume first item in the array is the potentially sorted list, since it's of length one.
  2. Compare the next item of the potentially sorted list to the items in the potentially sorted list, swapping them until the number to insert > then the iteration value.
  3. Do this for all items on the array, until the potentially sorted list is done
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
*/

function insertionSort(nums) {

  for (let i = 1; i < nums.length; i++) {
    const numberToInsert = nums[i]
    let j = i - 1
    while (j >= 0 && nums[j] > numberToInsert) {
      //
      nums[j + 1] = nums[j]
    }
    // for (j = i - 1; j >= 0 && nums[j] > numberToInsert; j--) {
    //   //shifts smaller elements to the left of the tenantively sorted list, until 
    //   nums[j + 1] = nums[j]
    // }
    nums[j + 1] = numberToInsert
  }
  return nums
}

// unit tests
// do not modify the below code
test("insertion sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  insertionSort(nums);
  expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
