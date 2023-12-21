var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
  };
  
  function ordenarKeysPorValor(objeto) {
    var keys = Object.keys(objeto);
    keys.sort(function(a, b) {
      return objeto[a] - objeto[b];
    });  
    return keys;
  }
  
  var keysOrdenadas = ordenarKeysPorValor(object);
  console.log(keysOrdenadas);
  