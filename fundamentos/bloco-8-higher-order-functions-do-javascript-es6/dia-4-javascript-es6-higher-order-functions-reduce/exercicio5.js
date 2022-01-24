const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  function containsA() {
    return names.reduce((acc, currentName) => 
        acc + currentName.split('').reduce((accu, curr) =>{
            if(curr === 'a' || curr === 'A') return accu + 1;
            return acc;
        }, 0), 0);
  }

  console.log(containsA())