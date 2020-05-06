
//préparation du jeux//
function initializeModel(grid) {
  grid.cells = [];
  grid.width = 12;
  grid.height = 18;
  grid.bloc = null;
  grid.orientation = -1;
  grid.x = -1;
  grid.y = -1;
  initializeGrid(grid);
  chooseBloc(grid);
  window.setInterval(update, 250, grid);
}
function initializeGrid(grid) {
  for (let i = 0; i < grid.height; i++) {
    grid.cells[i] = [];
    for (let j = 0; j < grid.width; j++) {
      grid.cells[i][j] = 0;
    }
  }
}
 // choisi un bloc de manière aléatoire//
 //  NB : on veut récupérer l'index du bloc donc BLOCS[]
function chooseBloc(grid) {
  grid.bloc = BLOCS[Math.floor(Math.random() * Object.keys(BLOCS).length) + 1];
  // la fonction Math.random retourne un nombre entre 0 et 1
  // Math.random retourne un nombre entier entre 0 et 1, alors qu'on veut un bloc dont l'index est compris entre 1 et 4 donc +1
  grid.orientation = Math.floor(Math.random() * grid.bloc.cells.length);
  grid.x = grid.width / 2 - 1;
  grid.y = 0;
}
// utilisation des touches du clavier pour se déplacer//
function incOrientation(grid) {
  grid.orientation = (grid.orientation + 1) % grid.bloc.cells.length;
}
function decX(grid) {
  if (grid.x > 0 && blocCanGoThere(grid, grid.x - 1, grid.y)) {
    grid.x--;
  }
}
function incX(grid) {
  if (
    grid.x < grid.width - grid.bloc.cells[grid.orientation][0].length &&
    blocCanGoThere(grid, grid.x + 1, grid.y)
  ) {
    grid.x++;
  }
}
// mise à jour de la grille//
function update(grid) {
  if (
    grid.y < grid.height - grid.bloc.cells[grid.orientation].length &&
    blocCanGoThere(grid, grid.x, grid.y + 1)
  ) {
    grid.y++;
  } else {
    stockBloc(grid);
    chooseBloc(grid);
  }
}
// gestion des collisions//
function blocCanGoThere(grid, x, y) {
  let cells = grid.bloc.cells[grid.orientation];
  let res = true;
  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      if (cells[i][j] && grid.cells[y + i][x + j] > 0) {
        res = false;
      }
    }
  }
  return res;
}
function stockBloc(grid) {
  let cells = grid.bloc.cells[grid.orientation];
  for (let i = 0; i < cells.length; i++) {
    // On parcourt les lignes de chaque objet
    for (let j = 0; j < cells[i].length; j++) {
      // On parcourt les colonnes de chaque ligne
      if (cells[i][j]) {
        grid.cells[grid.y + i][grid.x + j] = grid.bloc.id;
      }
    }
  }
}
// ligne pleine//si elle est pleine supprime...
function checkFullLine(grid) {
  for (let i = 0; i < grid.cells.length; i++) {
        let res = true;
        for (let j = 0; j < grid.cells[i].length; j++) {
          if (grid.cells[i][j] == 0) {
              res = false;
          }
        }
        if (res) {
          //supprime// j'enlève tout, en faisant descendre tout le reste.
          deleteLine(grid, i);
        }
    }
}
// fonction supprimer la ligne//
function deleteLine(grid,y) {
  for (let i = 0; i < y ; i++) {
    for (let j = 0; j <grid.cells[y].length; j++){
        grid.cells[y-i][j] = grid.cells[y - i -1][j];
    }
  }
  for (let j = 0; j <grid.cells[y].length; j++){
    grid.cells[0][j] = 0;
  }
}