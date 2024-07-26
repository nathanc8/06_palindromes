function isValidDateTS(date_string) {
    var parts = date_string.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10) - 1; // Les mois commencent à 0 en JavaScript
    var year = parseInt(parts[2], 10);
    var date = new Date(year, month, day);
    //console.log("isValidDateTS console.log : ", date);
    if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        return true;
    }
    else {
        return false;
    }
}
console.log("isValidDateTS call, should return true", "return : " + isValidDateTS("20/02/2002"));
var isPalindromeDateTS = function (date_string) {
    var valid_date = isValidDateTS(date_string);
    if (!valid_date) {
        return false;
    }
    else {
        return date_string.split("/").join("") === date_string.split("/").join("").split("").reverse().join("");
    }
};
console.log("isPalindromeDateTS call, should return true", "return : " + isPalindromeDateTS("20/02/2002"));
function getNextPalindromesTS(x, result) {
    var today = new Date();
    for (var i = 0; i < x; i++) {
        var palindromeFound = false;
        while (!palindromeFound) {
            today.setDate(today.getDate() + 1);
            var formatedDate = today.toLocaleDateString("en-GB");
            if (isPalindromeDateTS(formatedDate)) {
                result.push(formatedDate);
                palindromeFound = true;
                console.log("result ".concat(i, " is : "), result);
            }
        }
    }
    console.log("getNextPalindromesTS call : ", result);
    return result;
}
function isPalindromeTS(string_chain) {
    return string_chain === string_chain.split("").reverse().join("");
}
console.log("isPalindromeTS call, should return true", "return : " + isPalindromeTS("kayak"));
getNextPalindromesTS(8, []);
