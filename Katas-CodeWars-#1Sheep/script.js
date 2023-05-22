function countSheeps(arrayOfSheep) {
    function filterSheeps(sheep) {
      return sheep;
    }
  
    const filteredSheeps = arrayOfSheep.filter(filterSheeps);
    console.log(filteredSheeps);

    return filteredSheeps.length;
    }
  
  const array1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ];
  
  console.log(countSheeps(array1) === 17);