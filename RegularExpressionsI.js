function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    var re = /\b([aeiou])\w+\1\b/g;
    
    /*
     * Do not remove the return statement
     */
    return re;
}
