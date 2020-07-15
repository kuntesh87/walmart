function findLeet(inputString, charArray, mapArray) {
    const inputChar = [...inputString];
    var result = '';
    for (i = 0; i < inputChar.length; i++){
        const char = inputChar[i].toString();
        const index = charArray.indexOf(char.toLowerCase());
        if (index >= 0) {
            result = result.concat(String(mapArray[index]));
        } else {
            result = result.concat(String(inputChar[i]));            
        }
    }
    return result;
}

const charArray = ['a', 'e', 'i', 'o', 's', 't'];
const mapArray = ['4', '3', '1', '0', '5', '7'];
const inputString = 'Kuntesh Patel';

const result = findLeet(inputString, charArray, mapArray);
console.log('result', result);
