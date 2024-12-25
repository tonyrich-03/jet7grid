// utils.js
export const range = (start, end, step = 1) => {
  let output = [];

  // Handle the case where only `end` is provided
  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
