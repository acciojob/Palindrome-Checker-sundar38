// complete the given function
function palindrome(str){
	let str1=str.toLowerCase();
    var i=0;
    var j=str.length()-1;
    while(i!=j){
        if(str1[i]!=str1[j]){
            return false;
        }
		i++;
		j--;
    }
    return true;
}
module.exports = palindrome
