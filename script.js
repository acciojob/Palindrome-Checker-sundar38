// complete the given function

function palindrome(str){
	let str1=str.toLowerCase();
    let i=0;
    let j=str.length()-1;
    while(i!=j){
        if(str1.charAt(i)!=str1.charAt(j)){
            return false;
        }
		i++;
		j--;
    }
    return true;
}
module.exports = palindrome
