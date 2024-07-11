//Etape 1 :
//Créer une fonction isValidDate qui prend en paramètre une date en string et determine si elle est valide.
//Pour qu'une date soit valide, il faut qu'elle existe et qu'elle soit au format dd/mm/aaaa.

function isValidDate(date_string) {
    // Convertir le format de la date de "jj/mm/aaaa" à "aaaa-mm-jj"
    let parts = date_string.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // Les mois commencent à 0 en JavaScript
    let year = parseInt(parts[2], 10);
    let date = new Date(year, month, day);
    if (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
    ) {
        return true;
    } else {
        return false;
    }
}

//console.log(maxDaysInMonth("29/02/2023"));

//Etape 2 :
//Créer une fonction isPalindrome qui prend une date en string en paramètre et retourne un booléen qui
//indique si la date est un palindrome. Si la date est invalide, retourner false.
const isPalindrome = (date_string) => {
    valid_date = isValidDate(date_string);
    if (!valid_date) {
        return false;
    } else {
        //let try_date = date_string.replace(/\//g, ""); //regex qui permet de virer les "/" de la chaine de caractères
        let date = date_string.split("/").join("");
        let reversed_date = date.split("").reverse().join("");
        return date === reversed_date;
    }
};

//console.log(isPalindrome("20/02/2002"));

//Etape 3 :
//Créer une fonction getNextPalindromes qui donne les x prochaines dates palindromes à compter d’aujourd’hui.
//La fonction prendra le x en paramètre.

function getNextPalindromes(x, result) {
    let today = new Date();
    for (let i = 0; i < x; i++) {
        let palindromeFound = false;
        while (!palindromeFound) {
            today.setDate(today.getDate() + 1);
            formatedDate = today.toLocaleDateString("en-GB");
            if (isPalindrome(formatedDate)) {
                result.push(formatedDate);
                palindromeFound = true;
            }
        }
    }
    console.log(result);
    return result;
}

getNextPalindromes(8, []);

//test
