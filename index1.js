function counting(inputString) {
    const charArray = [...inputString];
    var result = '';
    var i = 0;
    for (; i < charArray.length; i++) {
        result = result.concat(String(charArray[i]));
        var count = 1;
        for (j = i+1; j < charArray.length; j++) {
            if (charArray[i] == charArray[j]) {
                count = count + 1;
            } else {
                i = j-1;            
               
                break;
                
               
            }
        }
         result = result.concat(String(count));
    }
    return result;
}

const result = counting('aaabbdcccccf');
console.log('result', result);
