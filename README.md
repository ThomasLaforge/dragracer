# DragRacer

## Définition du projet

DragRacer est un jeu de course de voiture en duel.
Les courses se pratiquent sur une ligne droite courte (400m) ou longue(1000m).
Il s'agit d'un jeu solo, scripté. Le joueur débutera dans une petite ville russe et parcourera l'Europe et les Etats-Unis pour atteindre le titre suprême de meilleur drag racer au monde.
Le joueur pourra faire évouler son bolide ou augmenter la taille de son garage pour accueillir de nouveaux bolides.
Le but est d'en apprendre un peu plus sur le fonctionnement d'une voiture et des forces qui définissent son mouvement.
Il faudra aussi équilibrer le jeu pour que l'utilisateur y prenne du plaisir. Les mécaniques à sa disposition sont à définir.

## Détail Game Design

Le pilote choisira son nom, sa nationalité, sa difficulté et son véhicule de départ.
La difficulté est un mélange de compétence et consitence de ses adversaires, d'argent de départ et d'usure de ses pièces et véhicules.
Le scénario comprendra certains évènements pour rendre chaque partie unique.

La première voiture doit lui permettre de remporter assez facilement ses premières courses et de pouvoir choisir une nouvelle voiture / un upgrade des composants de sa voiture pour remporter les courses de la première ville et choisir sa futur destination.

Les cartes ne suivent pas une continuité fixe:

a -- b -- d -- e -- h -- i
  -- c      -- f -- g

Le but étant d'inciter le joueur à relancer une nouvelle partie en effectuant de nouveaux choix.
Une fois l'histoire complétée, le joueur aura toute fois la possibilité d'aller dans toutes les villes du jeu pour valider les succès. Il rencontrera par défaut des adversaires de son niveau.

Le pilote doit en plus de faire des courses, monter en compétences. Il doit apprendre à maitriser :
- les différentes technique du pilotage en ligne droite
- la mécanique de sa voiture
- la préparation de sa voiture
- son charisme en choisissant ses courses et adversaires -> sponsoring

Le pilote peut sois même faire sa mécanique (contre du temps et de la formation) ou le faire en passant par un garage.

## Design

### Map

Une carte à la pokemon ou gran turismo. Un fond de carte vue satellite et des icônes par dessus pour les garages, les course, magasins de pièces, licences.
Sur la partie haute de l'écran, on doit voir l'heure du jeu, les crédits, un avatar, le niveau, les missions actuelles.
Sur la partie basse, on aura un menu pour accéder au permis de conduire du joueur (résumé, succès, etc...), 

### Course

Une vue de côté avec les deux voitures.
Au départ, la ligne de départ affichée et les feux de départ.
Une mini map pour savoir où on en est.

### Magasins de voitures

Les garages proposent une liste de voitures. Les magasins sont propres à une marque.
Les voitures sont d'origines et des options sont possibles. La couleur est à définir.

Des garages d'occasions proposent des voitures de différents marques.
Les voitures vendues sont avec une configuration fixe. L'usure est plus ou moins élevée.
La couleur est fixe.

Il s'agit donc d'une carousselle avec pour chaque voiture :
- la photo de la voiture selon un certain profil fixe
- les caractéristique
- les pièces
- le prix
- la couleur ou choix de la couleur
- les options
- le permis nécéssaire

Les voitures non accessibles sont grisées et la lacune pour son achat est justifié par une coloration rouge.

### Garages

Les garages permettent d'entretenir les voitures et d'acheter des pièces pour l'amélioration de la voiture.
Il y a donc une caisse / comptoir.
Un menu principal 
- l'achat de pièces (neuves/occasion)
- prestations (nettoyage, réparation des pièces) 

## Détail technique

### Modèle physique d'une accéleration de voiture

- Accéleration
- Grip
- Puissance / couple d'un moteur
- Boite de vitesse
- Boost nitro
- Aero
- Poid
- pression des pneus (chauffe, grip, usure)

### Implémentation des interractions du joueur dans ce modèle physique
Le joueur aura la possibilité de jouer sur quatre paramètres:
- chauffe des pneumatiques
- timing de départ
- timing de passage des rapports
- timing d'utilisation de la nitro

### Economie et expèrience

#### Général
L'experience se gagne après chacune des courses réalisée.
L'argent se gagne dans des courses ou à la revente de certaines pièces ou voitures.
On ne peut pas avoir moins de 0 € sur son compte en banque. On peut faire un crédit pour avoir un peu plus de trésorerie. Mais à chaque fin de mois si le compte est en négatif et qu'un crédit est à rembourser, la partie est terminée.
Des spnsors permettent de gagner de l'argent à chaque course / chaque mois / selon des résultats sportifs.

#### Début de partie
Le joueur débute avec une somme d'argent qui lui permet de pouvoir acheter une première voiture (starter).

A la façon Pokemon, il pourra choisir entre 3 voitures:
- "verte" = electrique
- "rouge" = essence atmo
- "bleu" = diesel turbo

Ce choix le place dans un arbre de compétence propre à sa couleur.
A chaque nouveau niveau validé, il pourra cocher une nouvelle compétence dans son arbre. Il sera possible de changer d'arbre durant sa partie en perdant une compétence. Le niveau maximum doit lui permettre de valider un arbre complet avec 5 possibilités bonus de modifier son arbre.

Capacités par arbre:
- arbre vert
  - produire sois même son électricité
  - réduire la chauffe de la batterie
  - augmenter la puissance
  - double crédit (car moins de chance d'imprévu)

- arbre rouge
  - augmenter la fiabilité
  - réduire la consommation => poids
  - augmenter l'indice octane
  - passer à l'ethanol

- arbre bleu
  - augmenter le turbo
  - admission d'air
  - reprogrammation électronique