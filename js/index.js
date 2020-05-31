//Pringting Output 
//Task 1 

let a = 3;
let b = 5;
let c;

let output = 'let a = 3;\n'; //using "\n" to make new lines
output += 'let b = 5;\n';
output += 'let c;\n';
output += '------------\n';


//using operators
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += 'a += b = ' + (a += b) + '\n';
output += 'a -= b = ' + (a -= b) + '\n';
output += 'a *= b = ' + (a *= b) + '\n';
output += 'a /= b = ' + (a /= b) + '\n';
output += 'a %= b = ' + (a %= b) + '\n';
output += 'a == b = ' + (a == b) + '\n';
output += 'a != b = ' + (a /= b) + '\n';
output += 'a > b = ' + (a /= b) + '\n';
output += 'a <= b = ' + (a /= b) + '\n';
output += '!a && !c ' + String(!a && !c) + '\n';
output += '!a || !c ' + String(!a || !c);

console.log( output );
alert(output);


//Task 2 
//My name is Your-first-name Your-last-name. You can contact me at your-email@mail.com.";

let first_name = 'Fiona';
let last_name = 'Yang';
let email = 'fiona@email';
let output_task_2 = '';

output_task_2 = 'My name is ' + first_name + ' ' + last_name + '. You can contact me at ' + email + '.';

console.log(output_task_2);
