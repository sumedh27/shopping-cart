export default function filterArray(arr, callback) {
  console.log(arr);
  for (let i = arr.length; i >= 0; i--) {
    if (!callback(arr[i])) arr.splice(i, 1);
  }
}
