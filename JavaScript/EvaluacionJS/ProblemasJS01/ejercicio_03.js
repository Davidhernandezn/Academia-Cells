var people = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 31 },
    { id: 3, name: "Peter", age: 55 }
  ];
  
  function filtraPersonasMenor35(array) {
    return array.filter(function(person) {
      return person.age < 35;
    });
  }
  
  var personasMenores35 = filtraPersonasMenor35(people);
  console.log(personasMenores35);
  