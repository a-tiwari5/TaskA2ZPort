// Scenario: Longest word has the most vowels.
const sentence =
  "This is a test sentence with numerous words that have vowels.";
// Expected Output: "numerous"

// Scenario: Multiple words with the same length, but one has more vowels.
// const sentence = "Aabe blue kite flew high.";
// Expected Output: "Aabe"

// Scenario: No vowels in any word.
// const sentence = "My Rhythms fly. Why my rhythms cry?";
// Expected Output: "rhythms"

// Scenario: Special characters and uppercase letters in words.
// const sentence = "Th1$ i$ a Sp3c!@l t3st w0rd.";
// Expected Output: "Spcl"

// Scenario: Longest word with vowels at the beginning and end.
// const sentence = "Aardvark and elephant are long words.";
// Expected Output: "Aardvark"

// Scenario: Empty input string.
// const sentence = "";
// Expected Output: ""

// Scenario: All words have the same length and vowel count.
// const sentence = "Alpha beta gamma";
// Expected Output: "Alpha" (the first longest word)

function longestWordInASentence(sentence) {
  const vowelRegex = /[aeiouAEIOU]/g;

  return sentence.split(" ").reduce((longest, word) => {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const vowelCount = (cleanedWord.match(vowelRegex) || []).length;
    if (
      cleanedWord.length > longest.length ||
      (cleanedWord.length === longest.length &&
        vowelCount > (longest.match(vowelRegex) || []).length)
    ) {
      return cleanedWord;
    }

    return longest;
  }, "");
}

const output = longestWordInASentence(sentence);
console.log(output);
