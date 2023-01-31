// complete the given function
function palindrome(str){
	let arr = [...str];
    // console.log(arr);
    let arrCopy = [...str];    // as reverse method also make changes to original array
    let arrReverse = arr.reverse();
        // arr = arrCopy;
    // console.log(`reverseArray:${arrReverse}`);
    // console.log(`array:${arr}`);
 
     for (let i = 0; i < arr.length; i++) {
        if (arrCopy[i] != arrReverse[i]) { 
            return false;
        }
    }
    return true;
}
module.exports = palindrome
