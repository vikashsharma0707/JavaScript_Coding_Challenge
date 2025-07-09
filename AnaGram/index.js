function isAnagram(str1, str2) {
  // Remove spaces and convert to lowercase
  const normalize = (str) => str.replace(/\s/g, '').toLowerCase().split('').sort().join('');
  
  return normalize(str1) === normalize(str2);
}

// Examples
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));   
console.log(isAnagram("School MASTER", "The ClassROOM"));
