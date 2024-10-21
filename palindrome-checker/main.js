let input;
let label;

document.addEventListener("DOMContentLoaded", () => {
    input = document.getElementById("palindrome_in");
    label = document.getElementById("answer_label");
})

function reverseString(str) {
    return str.split("").reverse().join("");
}

function checkPalindrome() {
    let text = input.value;
    let result =  text.toLowerCase() == reverseString(text.toLowerCase());
    label.innerText = result? `"${text}" is a palindrome.` : `"${text}" is NOT a palindrome.`;
}