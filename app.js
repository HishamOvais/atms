// example 1 even & odd

// var userPrompt = +prompt('Enter a no:');

// if (userPrompt > 0) {
//     if (userPrompt % 2 === 0) {
//         alert('Even number');
//     }
//     else {
//         alert('Odd number');
//     }
// }
// else {
//     alert('Invalid input');
// }




// example 2 login



// example 3 traffic signal

// var signal = prompt('Enter Color Of light');

// if (signal === 'red'){
//     alert('stop');
// }else if( signal === 'yellow'){
//     alert('get ready')
// }else if( signal === 'green'){
//     alert('go')
// }else{
//     alert('invalid')
// }




//assignment calculator


// var userValue = +prompt('Enter A Value:');
// var operator = prompt('Enter A operator')
// var userValue2 = +prompt('Enter Value 2');

// if (operator == '+') {
//     alert(userValue + userValue2);
// } else if (operator == '-') {
//     alert(userValue - userValue2);
// } else if (operator == '*') {
//     alert(userValue * userValue2);
// }
// else if (operator == '/') {
//     alert(userValue / userValue2);
// } else if (operator == '%') {
//     alert(userValue % userValue2);
// }else{
//     alert('invalid input')
// }

// var userName= prompt('Enter username')
// var password= prompt('Enter password')


// if(userName === 'admin' && password === '123456'){
//     alert('login sucess')
// }else{
//     alert('plz enter correct input')
// }


var balance = 5000;

var choice = prompt(
    "1. Check Balance\n2. Withdraw\n3. Deposit"
);

if (choice == '1') {
    alert("Your Balance is: " + balance);
}

else if (choice == '2') {
    var amount = prompt("Enter Withdraw Amount");

    if (amount <= balance && amount > 0) {
        balance = balance - amount;
        alert("Remaining Balance: " + balance);
    }
    else {
        alert("Insufficient Balance");
    }
}

else if (choice == '3') {
    var amount = prompt("Enter Deposit Amount");

    if (amount > 0) {
        balance = balance + Number(amount);
        alert("New Balance: " + balance);
    }
    else {
        alert("Invalid Amount");
    }
}

else {
    alert("Invalid Choice");
}
