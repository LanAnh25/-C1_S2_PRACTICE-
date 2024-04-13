function transformToObjects(listOfNumbers) {
    let result = [];
    for (let i = 0; i < listOfNumbers.length; i++) {
      let obj = { val: listOfNumbers[i] };
      result.push(obj);
    }
    return result;
  }

  let objectsList = transformToObjects(listOfNumbers);
  console.log(objectsList);