# LES  MÉTHODES

---
---

## 1. Définition
Le méthodes JavaScript dédiées aux **tableaux** fournissent des outils pour pouvoir les
manipuler et effectuer des opérations. Ci-dessous une liste décrivant ce qu'elles font :


#### 1.1 Map()
La méthode **map()** parcours un tableau existant et génère un **nouveau tableau** avec le résultat produit
sur chaque élement.

* Syntax : `.map(callback[, ])`

#### 1.2 Concat()
La méthode **concat()** utilise permet de concaténer plusieurs tableaux entre eux ou plusieurs valeurs d'un tableau.

* Syntax : `var nouveau_tableau = ancienTableau.concat(tableau1, nTableau...)`

#### 1.3 Filter()
La méthode **filter()** génére un **nouveau tableau** avec tous les élements testés du tableau appelant avec une **condition**
grâce à la fonction *callback*.

* Syntax : `tableau.filter(callback)`

#### 1.4 ForEach()
La méthode **forEach()** éxécute la fonction pour chaque élément du tableau.

* Syntax : `tableau.forEach(callback);`

#### 1.4 Join()
La méthode **join() ** permet de fusionner tous les élément d'un tableau en une seule chaîne et lui passer un paramètre.

* Syntax : `tableau.join(paramètre)`

#### 1.5 Reduce()
Complexe, la méthode **reduce()** utilise une fonction **accumulateur** qui fusionne deux valeurs d'un ou plusieurs
tableaux en un seul de gauche à droite.

* Syntax : `tableau.reduce(accumulator, value) => { return acc + value }`

#### 1.6 Sort()
La méthode **sort()** trie les éléments du tableau avec deux paramètres et renvoie le tableau.

* Syntax: `tableau.sort(value1, value2)`