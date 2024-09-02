const PasswordBox = document.getElementById("Password");
const length = 15;

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const lowerCase = "qwertyuiopasdfghjkklzxcvbnm"
const number = "0123456789"
const symbol = "~!@#$%^&*())_+{}|:"

const allchars = upperCase + lowerCase + number + symbol

function createPassword(){
 let Password = "";
 Password += upperCase[Math.floor(Math.random() * upperCase.length)];
 Password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
 Password += number[Math.floor(Math.random() * number.length)];
 Password += symbol[Math.floor(Math.random() * Symbol.length)];

 while(length > Password.length){
    Password += allchars[Math.floor(Math.random() * allchars.length)];
}

PasswordBox.value = Password;

}

