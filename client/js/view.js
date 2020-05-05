const SIZE = 40;

function initializeView(grid) {
  let canvas = document.getElementById("game");
  canvas.width = grid.width * SIZE;
  canvas.height = grid.height * SIZE;
  let context = canvas.getContext("2d");
  drawBloc(grid, context);
  window.setInterval(drawBloc, 500, grid, context);
}
function drawBloc(grid, context) {
  context.clearRect(0, 0, gird.width * SIZE, grid.height * SIZE);
  let cells = grid.bloc.cells[grid.orientation];
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        context.fillStyle = grid.bloc.color;
        context.fillRect((grid.x + j) * SIZE, (grid.y + i) * SIZE, SIZE, SIZE);
        context.strokeStyle = "black"; //contour des carreaux//
        context.strokeRect(
          (grid.x + j) * SIZE,
          (grid.y + i) * SIZE,
          SIZE,
          SIZE
        );
      }
    }
  }
}
