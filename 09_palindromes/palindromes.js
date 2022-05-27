const palindromes = function (string) {
    const newString = string.replace(/[^a-z0-9]/gi,'').toLowerCase();
    
    let backwardString = '';
    const startIndex = newString.length-1
    // console.log(newString.length)
    for(i=startIndex;i>=0;i--) {
        backwardString = backwardString.concat(newString[i]);
        //console.log(i,' ',newString[i]);
    }

    // console.log(string);
    // console.log(newString);
    // console.log(backwardString);
    return newString === backwardString;
};

// Do not edit below this line
module.exports = palindromes;
