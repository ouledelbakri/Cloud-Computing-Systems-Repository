function map(funct,array){

    var res = new Array(array.length);
    for(let i =0; i<array.length; i++){
      res[i]=funct(array[i]);
    }
    return res;
  }
  
  function mapRec(funct, array){
    if(array.length == 0){
      return [];
    }
    return [funct(array[0]), ...mapRec(funct, array.slice(1))];
  }
  
  mapArrow = (funct,array) => {
    if(array.length == 0) { return []; }
    return [f(array[0]), ...mapArrow(funct, array.slice(1))];
  }

