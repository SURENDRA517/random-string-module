"use strict"

module.exports = {
    RandomChar: (num) => {
        let string = "dsgbjkdfnnfkl47469058970850hdbgd546";
        let str = '';
        let i = 0;
        while(i < num) {
            str += string.charAt(Math.floor(Math.random() * string.length ));
            i++;
        }
        return str;
    }
}