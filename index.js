const { Random } = require("random-js");

const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lower = 'abcdefghijklmnopqrstuvwxyz'
const number = '0123456789'
const symbols = '!@#$%&*()?°/|'

const random = new Random(
    MersenneTwister19937.seedWithArray([0x12345678, 0x90abcdef])
  );
console.log(Random())