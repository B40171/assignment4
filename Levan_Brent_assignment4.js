//Brent Levan
 //SDI 1307
 //project 4

var myLibrary = function() {
    //check numeric function
    

    var checkNumeric = function(val) {
        
        if (isNaN(val)) {
            return false;
        } else {
            return true;
        }// end conditional
        
    };//end of checkNumeric
    
var checkPhoneNumber = function(number) {
    
    var dash1 = number.charAt(3),
        dash2 = number.charAt(7),
        areaCodeEnd = number.indexOf("-"),
        areaCode = number.substring(0,areaCodeEnd),
        prefixStart = areaCodeEnd +1,
        prefixEnd = number.lastIndexOf("-"),
        numberPrefix = number.substring(prefixStart, prefixEnd),
        numberStart = prefixEnd +1
        numberEnd = number.length,
        line = number.substring(numberStart, numberEnd);
        
    if (number.length === 12) {
        
        if (dash1 == "-"  && dash2 == "-" && !isNaN(areaCode) && !isNaN(numberPrefix) && !isNaN(line)) {
            return true;
        }else {
            return false;
        }
        
        }   
}
   
    return {
        "checkNumeric": checkNumeric,
        "checkPhoneNumber": checkPhoneNumber
    };
    
}// end of library

var newLib = new myLibrary();

console.log("Are we sending a number " + newLib.checkNumeric("42"));
console.log("Is this a phone number? " + newLib.checkPhoneNumber("123-456-7890"));
