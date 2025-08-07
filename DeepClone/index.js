const original = {
  name: "jay",
  age: 26,
  address: {
    city: "Bhopal",
    pin: 486001
  }
};

// Deep clone using structuredClone (ES2021+)
const clone = structuredClone(original);

// Test
clone.address.city = "Indore";

console.log("Original:", original.address.city); 
console.log("Clone:", clone.address.city);      
