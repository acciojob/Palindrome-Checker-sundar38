// complete the given function
function palindrome(str){
	var str1=str.toLowerCase();
    var start=0;
	var len=str1.length
    var end=Math.floor(len/2)
    for(var start=0; start<mid; start++){
        if(str1[start]!=str1[len-1-start]){
            return false;
        }		
    }
    return true;
}
module.exports = palindrome
