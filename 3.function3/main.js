/*
Create a new main.js file and write a function that outputs the incoming argument string alphabetically.
 */
function alphabetSort(message){
    // wirte your code here
    return message.split('').sort().join('')
}
alphabetSort('hello'); // should return 'ehllo'
