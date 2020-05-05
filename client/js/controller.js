function initializeController(grid) {
  window.onkeydown = (event) => {
    // console.log(event.code);
    let code = event.code;
    switch (code) {
      case "ArrowUp": //rotation - sur la flèche du haut//
        incOrientation(grid);
        break;

      case "ArrowRight": //déplacement à droite//
        incX(grid);
        break;

      case "ArrowDown": //descendre//
        update(grid);
        break;

      case "ArrowLeft": //déplacement à gauche//
        decX(grid);
        break;
    }
  };
}
