const removeFromArray = function(array,p0,p1,p2,p3) {
    
    let len=array.length;
    let newarray = [];
    
    for(let i=0;i<len;i++){
        if(array[i]!=p0,p1,p2,p3){
            newarray.push(array[i]);
        }
        else{
            continue;
        }
    }
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
