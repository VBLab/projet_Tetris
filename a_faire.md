Quels sont les besoins du jeux ? "brainstroming"
- des blocks : différentes formes L T I Z N .....
- écran d'accueil (press enter to start)
- musique de Tétris
- utiliser les touches du clavier
    => manipuler les mouvements
    => rotation
- agencement de blocs de manière aléatoire
- écran Game Over
- fonction de test si une ligne est complète
-> si oui la faire disparaitre et descendre tout ce qui est au dessus.
- gestion des collisions
-> si un bloc en touche un aute, il doit s'arrêter
- système de grilles pour tester (tableau)
- le score (accumulateur de points)
    -> definition du score
    -> passage de niveaux
    -> gestion de la vitesse
- prévisualisation du prochain bloc
- définition de la vitesse
- rotation des blocks (T spin)

A FAIRE ABSOLUEMENT
- blocs
- système de grille pour placer les blocks (test) -> tableau
- utilsation des touches du clavier (commandes)
    -> manipuler les mouvements (rotation, déplacement)
- gestion des collisions
- fonction test

LES DIFFERENTES TACHES
- 
LES BLOCS

const BLOC_I_rot ={
    cells: [[true],[true],[true],[true]]
};
const BLOC_T ={
    [[true,true,true],
    [false, true,false]]
}
const BLOC_T_rot2 ={
    cells:[false, true, true]
}