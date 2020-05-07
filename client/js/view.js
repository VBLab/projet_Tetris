const SIZE = 40;

function initializeView(grid) {
  let canvas = document.getElementById("game");
  let context = canvas.getContext("2d");
  canvas.width = grid.width * SIZE;
  canvas.height = grid.height * SIZE;
  draw(grid, context);
  // window.setInterval(drawBloc, 500, grid, context);
}
function draw(grid, context) {
  context.clearRect(0, 0, grid.width * SIZE, grid.height * SIZE);
  drawGrid(grid, context);
  drawBloc(grid, context);
  window.requestAnimationFrame(() => draw(grid, context));// quand le nav est prêt, on redessine la grille
  //=refreash de la vue, dès que les ressources le permettent//
}
function drawCell(context, x, y, color) {
  context.fillStyle = color;
  context.fillRect(x * SIZE, y * SIZE, SIZE, SIZE);
  context.strokeStyle = "black";
  context.strokeRect(x * SIZE, y * SIZE, SIZE, SIZE);
}
function drawBloc(grid, context) {
  let cells = grid.bloc.cells[grid.orientation];
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        drawCell(context, grid.x + j, grid.y + i, grid.bloc.color);
      }
    }
  }
}

function drawGrid(grid, context) {
  for (let i = 0; i < grid.cells.length; i++) {
    for (let j = 0; j < grid.cells[i].length; j++) {
      let cell = grid.cells[i][j];
      if (cell > 0) {
        drawCell(context, j, i, BLOCS[cell].color);
        
      }
    }
  }
}
