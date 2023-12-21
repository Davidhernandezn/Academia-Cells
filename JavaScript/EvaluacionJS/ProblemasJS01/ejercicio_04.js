let people = [
    { name: "bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 3 }
  ];
  
  function numeroNombreRepetido(array) {
    let nameCount = {};
    
    array.forEach(function(person) {
      if (nameCount[person.name]) {
        nameCount[person.name] += 1;
      } else {
        nameCount[person.name] = 1;
      }
    });
    
    return nameCount;
  }
  
  let nombreRepetido = numeroNombreRepetido(people);
  console.log(nombreRepetido);
  