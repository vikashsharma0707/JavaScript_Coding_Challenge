


function CountVowels(str){
    let count=0;
    let vowels="aeiosAEIOU";

    for(var i=0;i<vowels.length;i++){
        if(vowels.includes(str[i])){
            count++
            
        }
    }

    return count
}

console.log(CountVowels("Hello World"))