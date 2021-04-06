export function countField(arr, stringVal) {
  let count = 0;
  arr.map((obj) => {
    if (obj.category === stringVal) {
      count++;
    }
  });

  return count;
}
/**
 *
 * @param {*} arr
 * @param {*} stringVal field of the object to count
 * @param {*} field ; value of the filed
 */
export function countCompleted(arr, stringVal, field) {
  let count = 0;
  arr.map((obj) => {
    console.log(obj[stringVal]);
    console.log("Line 15", obj[stringVal]);

    if (obj[stringVal] === field) {
      console.log();
      count++;
    }
  });

  return count;
}

export function percent(total, current) {
  const num = (current / total) * 100;

  return num.toFixed(0);
}
