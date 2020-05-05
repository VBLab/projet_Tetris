function initializeModel(grid) {
  grid.cells = [];
  grid.width = 12;
  grid.height = 18;
  grid.bloc = null;
  grid.orientation = -1;
  grid.x = -1;
  grid.y = -1;
  chooseBloc(grid);
  window.setInterval(update, 100, grid);
}

function chooseBloc(grid) {
  // choisi un bloc de manière aléatoire
  grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // on veut récupérer l'index du bloc donc BLOCS[]
  // la fonction Math.random retourne un nombre entre 0 et 1
  // Math.random retourne un nombre entier entre 0 et 1, alors qu'on veut un bloc dont l'index est compris entre 1 et 4 donc +1
  grid.orientation = Math.floor(Math.random() * grid.bloc.cells.length);
  grid.x = grid.width / 2 - 1;
  grid.y = 0;
}
function update(grid) {
  if (grid.y < grid.height - grid.bloc.cells[grid.orientation].length) {
    grid.y++;
  }
}
