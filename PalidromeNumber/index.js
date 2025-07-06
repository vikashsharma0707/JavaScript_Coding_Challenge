function PalindromeCheck(str) {
    const letter = str.toLowerCase();
    const reverse = letter.split("").reverse().join("");

    if (letter === reverse) {
        console.log(`${str} is a Palindrome`);
        return true;
    } else {
        console.log(`${str} is NOT a Palindrome`);
        return false;
    }
}

// Function call with proper string input
const result = PalindromeCheck("Madam");
console.log(PalindromeCheck("hello"))
