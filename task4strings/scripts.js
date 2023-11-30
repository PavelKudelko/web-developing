function fn1() {
    var word = document.getElementById("word1").value;
    var result = (word.split("l").length - 1) + (word.split("L").length - 1);

    document.getElementById("result1").textContent = "Result: " + result;
}

function fn2() {
    var word = document.getElementById("word2").value;
    var vowels = "aeiouyAEIOUY"
    var cnt = 0;

    for(let x = 0; x < word.length; x++) {
        if (vowels.indexOf(word[x]) !== -1) {
            cnt += 1;
        }
    }
    document.getElementById("result2").textContent = "Result: " + cnt;
}

function fn3() {
    var word = document.getElementById("word3").value;
    var listed_word = word.split("");
    var reversed_list = listed_word.reverse();
    var reversed_word = reversed_list.join("");
    
    if (word == reversed_word) {
        document.getElementById("result3").textContent = "Result: " + word + " is palindrome";
    } else {
        document.getElementById("result3").textContent = "Result: " + word + " is NOT palindrome";
    }
}