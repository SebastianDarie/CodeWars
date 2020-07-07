function findMissingLetter(letters) {
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
            return String.fromCharCode(letters[i].charCodeAt() + 1);
        }
    }
}