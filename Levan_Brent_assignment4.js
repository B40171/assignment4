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
}// end of check phone number

var emailAddress = function(email) {
    var symbolLocation = (email.split("@").length -1);
            
    if (symbolLocation ===1) {        
         var symbol1 = email.indexOf("@"),   
            emailStarts = symbol1+1,
            emailEnds = email.length,
            address = email.substring(emailStarts, emailEnds),
            dotLocation = (address.split(".").length-1);
            
    if (dotLocation >= 1) {
            return true;
    } else {
        return false;
    }
    
    } else {
        return false;
    }
    
}

    return {
        "checkNumeric": checkNumeric,
        "checkPhoneNumber": checkPhoneNumber,
        "emailAddress": emailAddress
    };
    
}// end of library

var newLib = new myLibrary();

console.log("Are we sending a number " + newLib.checkNumeric("42"));
console.log("Is this a phone number? " + newLib.checkPhoneNumber("123-456-7890"));
console.log("Is this an email address?" + newLib.emailAddress("aaa@bbb.ccc"));
