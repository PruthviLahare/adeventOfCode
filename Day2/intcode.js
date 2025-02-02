const add = (memory, pos) => {
  const outputIndex = memory[pos + 3];

  memory[outputIndex] = memory[memory[pos + 1]] + memory[memory[pos + 2]];

  return (pos += 4);
};

const mul = (memory, pos) => {
  const outputIndex = memory[pos + 3];

  memory[outputIndex] = memory[memory[pos + 1]] * memory[memory[pos + 2]];

  return (pos += 4);
};

const halt = (memory) => {
  console.log(memory);

  Deno.exit();
};

const instructions = {
  1: add,
  2: mul,
  99: halt,
};

const main = (memory) => {
  let i = 0;

  while (i < memory.length) {
    i = instructions[memory[i]](memory, i);
  }
};

// const list = [1, 1, 1, 1, 99];

// main(list);
// main([1, 0, 0, 0, 99]);
// main([2, 3, 0, 3, 99]);
// main([2, 4, 4, 5, 99, 0]);
// main([1, 1, 1, 4, 99, 5, 6, 0, 99]);
// main([99]);
main([
  1, 12, 2, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 6, 1, 19, 2, 19, 9, 23, 1,
  23, 5, 27, 2, 6, 27, 31, 1, 31, 5, 35, 1, 35, 5, 39, 2, 39, 6, 43, 2, 43, 10,
  47, 1, 47, 6, 51, 1, 51, 6, 55, 2, 55, 6, 59, 1, 10, 59, 63, 1, 5, 63, 67, 2,
  10, 67, 71, 1, 6, 71, 75, 1, 5, 75, 79, 1, 10, 79, 83, 2, 83, 10, 87, 1, 87,
  9, 91, 1, 91, 10, 95, 2, 6, 95, 99, 1, 5, 99, 103, 1, 103, 13, 107, 1, 107,
  10, 111, 2, 9, 111, 115, 1, 115, 6, 119, 2, 13, 119, 123, 1, 123, 6, 127, 1,
  5, 127, 131, 2, 6, 131, 135, 2, 6, 135, 139, 1, 139, 5, 143, 1, 143, 10, 147,
  1, 147, 2, 151, 1, 151, 13, 0, 99, 2, 0, 14, 0,
]);
