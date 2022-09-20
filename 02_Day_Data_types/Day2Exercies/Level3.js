// Exercises: Level 3
// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
let text =
  "'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.";
console.log(text.match(/love/gi).length);

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
text =
  "You cannot end a sentence with because because because is a conjunction";
console.log(text.match(/because/gi).length);

// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//     const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
let sentenceClean = sentence
  .replace(/@/g, "")
  .replace(/%/g, "")
  .replace(/\$/g, "")
  .replace(/&/g, "")
  .replace(/#/g, "")
  .replace(/;/g, "")
  .replace(/!/g, "");
console.log(sentenceClean);
console.log(sentenceClean.split(" "));
let senArray = sentenceClean.split(" ");
let max = 0;
let word = "test";
let occurance = 0;

for (let i = 0; i < senArray.length; i++) {
  occurance = 0;
  for (let j = i; j < senArray.length; j++) {
    if (senArray[i] == senArray[j]) {
      console.log("testing: [" + i + "]" + senArray[i] + " : " + senArray[j]);
      occurance++;
    }
  }
  if (occurance == max) {
    word =
      word +
      ",\n" +
      "Word: \"" +
      senArray[i] +
      "\" occured " +
      occurance +
      " times";
  }
  if (occurance > max) {
    max = occurance;
    word = "Word: \"" + senArray[i] + "\" occured " + occurance + " times";
  }
}

console.log("The maximum occurence is: " + max);
console.log(typeof word);
console.log(word);

// Calculate the total annual income of the person by extracting the numbers from the following text. 
// 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
const ary = (txt.match(/\d+/g))
console.log(ary[0]*12 + ary[1]*1 + ary[2]*12)