function test(words, s) {
  // constraints macthing
  if (
    words.length < 1 ||
    (words.length > 100 && words[i].length < 1) ||
    (words[0].length > 10 && s.length < 1) ||
    s.length > 100
  ) {
    return "Invalid words length";
  }

  let test = "";
  const validation = words.map((word) => {
    // check condition
    if (word.length < 1 || word.length > 10) {
      return false;
    }
  });
  if (validation) {
    words.map((word) => {
      return (test += word[0]);
    });
    console.log(test);
    return test === s ? true : false;
  } else {
    return "invalid word length";
  }
}

let words2 = ["fhkjgjhgf"];
let s2 = "f";
console.log(test(words2, s2));
