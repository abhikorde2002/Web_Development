/*
JavaScript is a single-threaded interpreted language.
 Every browser has its own JavaScript engine. 
Google Chrome has the V8 engine, Mozilla Firefox has SpiderMonkey, and
so on. They all are used for the same goal, because the browsers cannot
 directly understand JavaScript code.

 What is the Execution Context?
When the JavaScript engine scans a script file, it makes an environment 
called the Execution Context that handles the entire transformation and
 execution of the code.

During the context runtime, the parser parses the source code and allocates
 memory for the variables and functions. The source code is generated and
  gets executed.

There are two types of execution contexts: global and function. 
The global execution context is created when a JavaScript script first 
starts to run, and it represents the global scope in JavaScript.
 A function execution context is created whenever a function is called, representing 
the function's local scope.

Phases of the JavaScript Execution Context
There are two phases of JavaScript execution context:

Creation phase: In this phase, the JavaScript engine creates the execution context
 and sets up the script's environment. It determines the values of variables and 
 functions and sets up the scope chain for the execution context.

 Execution phase: In this phase, the JavaScript engine executes the code in the
 execution context. It processes any statements or expressions in the script and 
 evaluates any function calls.

 Everything in JS happens inside this execution context. It is divided into two components.
  One is memory and the other is code. It is important to remember that these phases and 
  components are applicable to both global and functional execution contexts.

  var n = 5;

function square(n) {
  var ans = n * n;
  return ans;
}

var square1 = square(n);
var square2 = square(8);  

console.log(square1)
console.log(square2)

At the very beginning, the JavaScript engine executes the entire source
 code, creates a global execution context, and then does the following things:

1] Creates a global object that is window in the browser and global in NodeJs.
2] Sets up a memory for storing variables and functions.
3] Stores the variables with values as undefined and function references.

https://www.freecodecamp.org/news/content/images/size/w600/2022/12/untitled-2.png

Execution Phase
Now, in this phase, it starts going through the entire code line by line from 
top to bottom. As soon as it encounters n = 5, it assigns the value 5 to 'n'
 in memory. Until now, the value of 'n' was undefined by default.

Then we get to the 'square' function. As the function has been allocated in
 memory, it directly jumps into the line var square1 = square(n);. square() 
 will be invoked and JavaScript once again will create a new function execution context.


*/


let var1=5 ?? 10
console.log(var1);

var1= null ?? 10
console.log(var1);

var1= null ?? 20 ?? 10

console.log(var1);