// takes a long string and returns a list of strings split at the /n
function returnSplitString(textString) {
  return textString.split("\n");
}

//takes a list of strings and returns new list without empty strings
function removeEmptyStrings(stringList) {
  let newList = [];
  for (i = 0; i < stringList.length; i++) {
    if (stringList[i].length > 0) {
      newList.push(stringList[i]);
    }
  }
  return newList;
}

// takes a list of strings and returns an object with a question and its answer
function makeQAObject(stringList) {
  let object = {
    question: stringList[0],
    difficulty: stringList[1],
    answer: [],
    source: stringList[-1]
  };
  for (i = 2; i < stringList.length - 1; i++) {
    object.answer.push(stringList[i]);
  }
  return object;
}

//takes one long string, splits it, removes empty strings, and returns object
const returnQAObject = function(textString) {
  let splitStringList = returnSplitString(textString);
  let despacedStringList = removeEmptyStrings(splitStringList);
  return makeQAObject(despacedStringList);
};

module.exports = returnQAObject;
