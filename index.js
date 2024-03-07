// function for validating if 2 passwords (a and b) match
function validatePassword(a, b) {
    // checks if a and b match
    if(a == b) {
        // checks if the password has at least 8 characters
        if(a.length >= 8) {
            const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

            // checks if the password has at least 1 number
            let flag = 0;
            for (let x of digits) {
                if(a.includes(x)) {
                    flag = flag+1;
                    break;
                }
            }

            // checks if the password has at least 1 lowercase character
            for (let y of letters) {
                if(a.includes(y)) {
                    flag = flag+1;
                    break;
                }
            }

            // checks if the password has at least 1 uppercase character
            for (let z of letters) {
                i = z.toUpperCase();
                if(a.includes(i)) {
                    flag = flag+1;
                    break;
                }
            }

            // checks if 1 number, 1 uppercase character, and one lowercase character are present in the password
            if(flag == 3) {
                console.log(true); //checker
                return true;
            } else {
                console.log(false); //checker
                return false;
            }
        } else {
            console.log(false); //checker
            return false;
        }
    } else {
        console.log(false); //checker
        return false;
    }
}

// test values
validatePassword("helloworld", "hello")     // returns false
validatePassword("hello", "hello")    	    // returns false
validatePassword("hello1234", "hello1234")  // returns false
validatePassword("Hello1234", "Hello1234")  // returns true
validatePassword("HELLO1234", "HELLO1234")  // returns false

//function for reversing the password
function reversePassword(pass) {
    //empty array holder for reversed password
    let reverse = [];

    //stores last element in string "pass" to first element in array "reverse"
    for(let i = 0; i < pass.length; i++) {
        reverse[i] = pass[pass.length-i-1]
    }

    //concatenates array into string with no delimiter between elements
    let reversed = reverse.join("");
    return reversed;
}

//function for storing the password to the object
function storePassword(n, a, b) {
    //sets new password as the first typed password by default
    let newpass = a;

    //checks if the two passwords are matching and valid using validatePassword function
    if(validatePassword(a,b)) {
        //replaces new password with the reversed version if both passwords entered are matching and valid
        newpass = reversePassword(a);
    }

    //creates an object that stores the user's name and new password
    let obj = {
        name: n,
        newpassword: newpass
      }

    console.log(obj); //return value checker
    return obj;
}

//test values
storePassword("John", "Pass1234", "Pass1234") // returns {name: "John", newpassword:"4321ssaP"}
storePassword("John", "Pass123", "Pass12345") // returns {name: "John", newpassword:"Pass123"}