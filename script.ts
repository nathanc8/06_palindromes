function isValidDateTS(date_string: string): boolean {
    let parts: Array<string> = date_string.split("/");
    let day: number = parseInt(parts[0], 10);
    let month: number = parseInt(parts[1], 10) - 1; // Les mois commencent à 0 en JavaScript
    let year: number = parseInt(parts[2], 10);
    let date = new Date(year, month, day);
    //console.log("isValidDateTS console.log : ", date);
    if (date.getFullYear() === year && date.getMonth() === month && date.getDate() === day) {
        return true;
    } else {
        return false;
    }
}

console.log("isValidDateTS call, should return true", "return : " + isValidDateTS("20/02/2002"));

const isPalindromeDateTS = (date_string) => {
    let valid_date = isValidDateTS(date_string);
    if (!valid_date) {
        return false;
    } else {
        return date_string.split("/").join("") === date_string.split("/").join("").split("").reverse().join("");
    }
};

console.log("isPalindromeDateTS call, should return true", "return : " + isPalindromeDateTS("20/02/2002"));

function getNextPalindromesTS(x, result): Array<string> {
    let today = new Date();
    for (let i = 0; i < x; i++) {
        let palindromeFound: boolean = false;
        while (!palindromeFound) {
            today.setDate(today.getDate() + 1);
            let formatedDate = today.toLocaleDateString("en-GB");
            if (isPalindromeDateTS(formatedDate)) {
                result.push(formatedDate);
                palindromeFound = true;
                console.log(`result ${i} is : `, result);
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
