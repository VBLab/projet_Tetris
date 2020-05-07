// mise à jour du jeux//comment le joueur agit sur le modèle//
function initializeController(grid) {
  window.onkeydown = (event) => {
    // j'écoute les touche du clavier, si elle sont utilisées, je lance ces fonctions//
    let code = event.code;
    switch (code) {
      case "ArrowUp": //rotation - sur la flèche du haut//
        incOrientation(grid);
        break;

      case "ArrowRight": //déplacement à droite//
        incX(grid);
        break;

      case "ArrowDown": //descendre + vite//
        update(grid);
        break;

      case "ArrowLeft": //déplacement à gauche//
        decX(grid);
        break;
    }
  };
}
