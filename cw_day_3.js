/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

*/

function encrypt(text, n) {
  if (!text || n <= 0) return text;
  let even = "";
  let odd = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < text.length; j++) {
      if (j % 2 === 0) {
        even += text[j];
      } else {
        odd += text[j];
      }
    }
    text = odd + even;
    odd = "";
    even = "";
  }
  return text;
}

function decrypt(text, n) {
  if (!text || n <= 0) return text;
  let half = Math.floor(text.length / 2);
  for (let j = 0; j < n; j++) {
    let secondHalf = text.slice(half);
    let firstHalf = text.slice(0, half);
    let result = "";
    for (let i = 0; i <= half; i++) {
      if (secondHalf[i]) result += secondHalf[i];
      if (firstHalf[i]) result += firstHalf[i];
    }
    text = result;
  }
  return text;
}

//console.log(encrypt("This is a test this is too long", 8));
console.log(decrypt("012345", 3));
