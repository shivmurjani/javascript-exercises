const reverseString = function(text) {
    var length = text.length
    var reveresedString = ""
    for(let i=length-1;i>=0;i--){
        reveresedString+=text[i];
    }
    return reveresedString;
};

// Do not edit below this line
module.exports = reverseString;
