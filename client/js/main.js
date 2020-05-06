const BLOCS = {
  1: {
    // bloc Z
    id: 1,
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
    id: 2,
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
    id: 3,
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
  4: {
    //BLOCK_B
    id: 4,
    cells: [
      [
        [true, true],
        [true, true],
      ],
    ],
    color :"black",
  },
  5: {
    //BLOCK_T
    id:5,
    cells: [
      [[true],[true],[true],[true]], [[true, true, true,true]]
    ],
    color: "orange",
  }
};
let grid = {};
initializeModel(grid);
initializeView(grid);
initializeController(grid);
