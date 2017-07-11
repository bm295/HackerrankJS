/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i).match(/[aeiou]/gi) != null) {
            console.log(s.charAt(i))
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (s.charAt(i).match(/[aeiou]/gi) == null) {
            console.log(s.charAt(i))
        }
    }
}
