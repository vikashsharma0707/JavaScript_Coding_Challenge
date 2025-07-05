



function ReverString(arr){
    return  arr.split("").reverse().join("")
}


const string="Hello javascript"
const stringreverse = ReverString(string)
console.log(stringreverse)

//code

// 🔍 Explanation:
// .split('') → Converts the string into an array of characters: ["h", "e", "l", "l", "o"]

// .reverse() → Reverses the array: ["o", "l", "l", "e", "h"]

// .join('') → Joins the array back into a string: "olleh"