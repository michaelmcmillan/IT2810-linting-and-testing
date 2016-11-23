/*
// Before linting
function printHelloMessage(greeting = "Hello", name){
  console.log(greeting + ", my good friend " + name);
}
printHelloMessage("Bye", "Trond");
*/

// After linting
function printHelloMessage(name, greeting = 'Hello') {
  console.log(`${greeting}, my good friend, ${name}`);
}
printHelloMessage('Trond');
