
// Implémentation itérative de la fonction map
function map(funct, list) {

    var result = new Array(list.length);
    // Parcourt la liste et applique la fonction sur chaque element
    for (let i = 0; i < list.length; i++) {
      result[i] = funct(list[i]);
    }
    return result;
  }
  
  // Implémentation récursive
  function mapRecursive(funct, list) {
    let len = list.length;

    if (len === 0) {
      return [];
    }
    // Appelle la fonction sur le premier élément, puis continue récursivement sur le reste
    return [funct(list[0]), ...mapRecursive(funct, list.slice(1))];
  }
  
  // Implémentation récursive avec fonction fléchée
  const mapArrow = (funct, list) => 
    list.length === 0 ? [] : [funct(list[0]), ...mapArrow(funct, list.slice(1))];
  