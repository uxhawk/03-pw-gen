var passwordLength, lowerCase, upperCase, numericChars, specialCharacters;
var password = "";

function setPasswordLength() {
    passwordLength = parseInt(prompt("How many characters do you want in the password? (min 8; max 128)"));

    if (passwordLength < 8 || isNaN(passwordLength)) {
        setPasswordLength();
    } else if (passwordLength > 128 || isNaN(passwordLength)) {
        setPasswordLength();
    }
}

$("button").click(function() {

    setPasswordLength();

    if (passwordLength >= 8 && passwordLength <= 128) {
        lowerCase = confirm("Do you want lowercase letters?");
        upperCase = confirm("Do you want uppercase letters?");
        specialCharacters = confirm("Do you want special characters?");
        numericChars = confirm("Do you want numbers?");
    }

    if (lowerCase === false && upperCase === false && specialCharacters === false && numericChars === false) {
        alert("You have to choose at least one character type. Start again.");
        return
    }

    printPW();

})

function printPW() {
    var password = "";
    var availableChars = "";
    var alphaL = "abcdefghijklmnopqrstuvwxyz";
    var alphaU = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nums = "0123456789";
    var spChars = "~!@#$%^&*()-_=+{}\|;:',<.>/?";
    var guaranteeU, guaranteeL, guaranteeNum, guaranteeSp;

    if (lowerCase) {
        availableChars += alphaL;
        guaranteeL = alphaL[Math.floor(Math.random() * alphaL.length)];
        passwordLength--;
    }
    if (upperCase) {
        availableChars += alphaU;
        guaranteeU = alphaU[Math.floor(Math.random() * alphaU.length)];
        passwordLength--;
    }
    if (numericChars) {
        availableChars += nums;
        guaranteeNum = nums[Math.floor(Math.random() * nums.length)];
        passwordLength--;
    }
    if (specialCharacters) {
        availableChars += spChars;
        guaranteeSp = spChars[Math.floor(Math.random() * spChars.length)];
        passwordLength--;
    }

    //select random characters from the availableCharacters string
    for (let i = 1; i <= passwordLength; i++) {
        password += availableChars[Math.floor(Math.random() * availableChars.length)];
    }


    //add in the guaranteed characters in random positions to make sure the output matches the security requirements
    if (lowerCase) {
        var ranNum = Math.floor(Math.random() * password.length);
        password = [password.slice(0, ranNum), guaranteeL, password.slice(ranNum)].join('');
    }

    if (upperCase) {
        var ranNum = Math.floor(Math.random() * password.length);
        password = [password.slice(0, ranNum), guaranteeU, password.slice(ranNum)].join('');
    }

    if (numericChars) {
        var ranNum = Math.floor(Math.random() * password.length);
        password = [password.slice(0, ranNum), guaranteeNum, password.slice(ranNum)].join('');
    }

    if (specialCharacters) {
        var ranNum = Math.floor(Math.random() * password.length);
        password = [password.slice(0, ranNum), guaranteeSp, password.slice(ranNum)].join('');
    }

    $("#pw-output").text(password);

}