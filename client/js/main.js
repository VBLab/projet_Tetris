const BLOCS = {
  1: {
    // bloc Z
    cells: [
      [
        [true, true, false],
        [false, true, true],
      ],
      [
        [false, true],
        [true, true],
        [true, false],
      ],
    ],
    color: "green",
  },
  2: {
    // bloc T
    cells: [
      [
        [true, true, true],
        [false, true, false],
      ],
      [
        [true, false],
        [true, true],
        [true, false],
      ],
      [
        [false, true, false],
        [true, true, true],
      ],
      [
        [false, true],
        [true, true],
        [false, true],
      ],
    ],
    color: "#6b3c4c",
  },
  3: {
    //BLOCK_L
    cells: [
      [
        [true, false],
        [true, false],
        [true, true],
      ],
      [
        [true, true, true],
        [true, false, false],
      ],
      [
        [true, true],
        [false, true],
        [false, true],
      ],
      [
        [false, false, true],
        [true, true, true],
      ],
    ],
    color: "grey",
  },
};
let grid = {};
initializeModel(grid);
initializeView(grid);
initializeController(grid);
