// FULL JAVASCRIPT COURSE BY DASUCCESS

// var age = 10
// var product = 60
// age *= product // this is use to reassign new values for age
// var age = 40
// age++ // this is use to increase age with one
// age-- // this is use to decrease age with one
// var hy = "i am a \"double agent\" and i am \"game\" , thats good"
// var hy = ' i am a "double agent" and i am "game" , thats good"'
// var hy = "i am a \n \t \"double agent\" and \n \t i am \"game\" , thats good"

// To concatenate, we concatenate with plus + sign
// var age = 'name';
// var b = true;
// var comment = 'This is javascript'
// var concate = 'i wanna concatenate ' + b + ' and ' + age + '. ' + comment;

// comment -= b -= age

// var b = 'my name'
// b[0] = 'b' //cannot be immutate because strings are immutable but we can do this
// b = 'By age' //you can chage the strings by redclaring using var or let but not const
// console.log(b)

// var b = 'my name'
// firstIndex = b[b.length - 1] // this can be use to get each letter in each string using mathematical manipulation
// console.log(firstIndex)

// let us
// try this example

// function statement(myNoun, myVerb, Mystatement, myAge, boolean) {
//     result = '';
//     result += 'My ' + myNoun + ' ' + myVerb + ' ' + Mystatement + ' ' + myAge + ' times and thats ' + boolean
// }
// statement('dog', 'ran', 'quickly', 10, true);
// console.log(result)

// LET US GO TO ARRAY
// var home = ['bungalow', 'story', 'verratti'];
// // console.log(home.length)
// // console.log(home[2])
// home[1] = 'Duplex' // this will change the array in index2
// console.log(home)

// ARRAY WITHIN AN ARRAY
// var array = [
//     [9, 7, 8],
//     [3, 5, 9],
//     [5, 8, 2]
// ]

// reducedArray = array.pop() //pop the last one out of the array
//     // console.log(array[0])
//     // console.log(array[0][1])
// console.log(reducedArray)
//     // console.log(reducedArray[0])
// console.log(name.substring(0, )) substring is used to read strings value
// array.push([12, 1, 6]) // push add element to the end of the array
// array.shift() // shift removes the first array[0]
// array.unshift([20, 'name', 4]) // unshift add and replace element to the fist of the array
// console.log(array)
// var shoppingListArray = [
//     ['beans', 8],
//     ['Juice', 4],
//     ['Eggs', 12],
//     ['Fanta', 12]
// ]
// console.log(shoppingListArray) // you can use the above command on line 52-57 to manipulate your changes of the shopping list

// FUNCTION

// function name() {
//     console.log('hello world')
// }
// name()
//     // or
// function name() {
//     var myName = 'hello world'
//     return myName
// }
// console.log(name())

// function addition(even, odd) {
//     var addup = even + odd
//     console.log(addup)
// }
// addition(4, 7)

// function subtraction(even, odd) {
//     var addup = even - odd
//     console.log(addup)
// }
// subtraction(4, 7)

// GLOBAL SCOPE FUNCTION: this means it can be seen everywhere on your code
//


// function scope() {
//     if (typeof global != 'undefined') {
//         result = '';
//         result += 'My Global value is ' + global
//     } else {
//         console.log(Error)
//     }
//     console.log(result)
// }

// function scope2() {
//     if (typeof global == 'undefined') {
//         result += 'My Global value is ' + global
//     } else {
//         console.log(Error)
//     }
//     // console.log(result)
// }
// scope()
// scope2()
// console.log(result) // wont run if the result is defined by var, but since the result
// is global it will work anywhere it is called from

// var myName = 'Bolaji Muhammed Luqman';

// function getMyName() {
//     return myName
// }
// // getMyName()  command wont work here because its returning a value
// console.log(getMyName())

// function sum(number) {
//     return number - 5
// } // you can do the same others
// console.log(sum(10))

// using function to edit an array 

// const array = [1, 2, 3, 4]

// function edit() {
//     array[0] = 4,
//         array[1] = 8
//     return array
// }
// console.log(edit())
//EXAMPLES ON WHAT WE HAVE LEARNT SO FAR

// function example(array, value) {
//     array.push(value)
//     return array.shift()
// }
// var realArr = [1, 2, 3, 4, 5];
// console.log('1st command' + JSON.stringify(realArr))
// console.log('1st command' + realArr) //this will still work but will not pass the argument as an ARRAY
// console.log(example(realArr, 6))
// console.log('2st command' + JSON.stringify(realArr))
// var single = 10;

// function value(num) {
//     add = single - num / 2
//     return add
// }

// myAnswer = value(7)
// console.log(value(7))
// console.log(add)
// console.log(myAnswer)    //This is a typical example of how to manipulate function

// example on web simple slider with javascript
// var image = [];
// var index = 0;
// var time = 3000;

// image[0] = "img1.jpeg"
// image[1] = "img2.jpeg"
// image[2] = "img3.jpeg"


// function changeImage() {

//     document.slide.src = image[index]

//     if (index < image.length - 1) {
//         index++
//     } else {
//         index = 0
//     }
//     setTimeout("changeImage()", time)
// }

// window.onload = changeImage()

// how to Test Boolean Function returning true or false using if statement
// function myNameIsCode(boolean) {
//     if (myNameIsCode) {
//         return true
//     } else {
//         return false
//     }
// }
// myNameIsCode()
// console.log(myNameIsCode())

// Equality operator in if statement ( ==: equla, ===: strict equality operator(does not do type conversion) )
// function equalTo(num) {
//     if (num == 5) {
//         return 'you are correct'
//     } else {
//         return 'you are wrong'
//     }
// }
// console.log(equalTo(10))

// function equalTo(num) {
//     if (num == 5) {
//         return 'you are correct'
//     } else {
//         return 'you are wrong'
//     }
// }
// console.log(equalTo(5))

//using strict equality operations
// function strictEqual(val) {
//     if (val === 12) {
//         return true
//     } else
//         return false
// }
// console.log(strictEqual('12')) // Note: Here the value of 12 is string so the strict equalt to will say false

//using Greater than(>), Less than(<) in if statement, Less than or equal to(<-) e.t.c
// function strictEqual(val) {
//     if (val < 12) {
//         return true
//     } else
//         return false
// }
// console.log(strictEqual('10'))
// function strictEqual(val) {
//     if (val <= 12) {
//         return true
//     } else
//         return false
// }
// console.log(strictEqual('10'))

// using and (&&), or (||)
// function strictEqual(val) {
//     if (val < 12 && val == 12) {
//         return true
//     } else
//         return false
// }
// console.log(strictEqual('10'))

// function strictEqual(val) {
//     if (val < 12 || val == 12) {
//         return true
//     } else
//         return false
// }
// console.log(strictEqual('10'))

// using elseif statement
// function strictEqual(val) {
//     if (val < 12) {
//         return 'yeah i am lesser or equal to 12';
//     } else if (val == 12) {
//         return 'i am correct because i am 12'
//     } else
//         return false
// }
// console.log(strictEqual('12'))

// CHALLENGE ON IF STATEMENT together with an array
// var myArrayList = ['Man Utd', 'Chelsea', 'Man city', 'Liverpool', 'Everton', 'Wolves', 'Leeds Utd']

// function calculate(myTeam, myChoices) {
//     if (myTeam > myChoices + 7) {
//         return myArrayList[2]
//     } else if (myTeam == myChoices + 1) {
//         return myArrayList[0]
//     } else if (myChoices == myTeam + 3) {
//         return myArrayList[4]
//     } else if (myChoices != myTeam) {
//         return myArrayList[6]
//     } else if (myArrayList[2] == myChoices)
//         return myArrayList[1]
//     else {
//         return 'You dont have any team'
//     }
// }
// console.log(calculate(4, 3))
// console.log(calculate(3, 3))
// console.log(myArrayList[2])

// Javascript switch statement
// if you wanna switch your statement to give a particular output which is almost the same as if statement
// function giveMeSwitch(val) {
//     var ourAnswer = '';
//     switch (val) {
//         case 1:
//             ourAnswer = 'My name is Luqman'
//             break;
//         case 2:
//             ourAnswer = 'This is case 2'
//             break;
//         case 3:
//             ourAnswer = 'This is case 3 and you are awesome'
//             break;
//         case 4:
//             ourAnswer = 'i dont wanna talk much but i am case 4'
//             break;
//     }
//     return ourAnswer;
// }
// console.log(giveMeSwitch(4))

// using default in switch statement (default works just like else)
// function defaultSwitch(num) {
//     var result = ''
//     switch (num) {
//         case 1:
//             result = 'Man Utd'
//             break;
//         case 2:
//             result = 'Liverpool'
//             break;
//         case 3:
//             result = 'Man city'
//             break;
//         case 4:
//             result = 'Chelsea'
//             break;
//         case 5:
//             result = 'Arsenal'
//             break;
//         default:
//             result = 'This team code does not exist'
//     }
//     return result
// }
// console.log(defaultSwitch(6))
// console.log(defaultSwitch(1))

// Using switch statement the cases can be either (number, string)function defaultSwitch(num) {
// function defaultSwitch(num) {
//     var result = ''
//     switch (num) {
//         case 'dasuccess':
//             result = 'Man Utd'
//             break;
//         case 200409:
//             result = 'Liverpool'
//             break;
//         case 3:
//             result = 'Man city'
//             break;
//         case 4:
//             result = 'Chelsea'
//             break;
//         case 5:
//             result = 'Arsenal'
//             break;
//         default:
//             result = 'This team code does not exist'
//     }
//     return result
// }
// console.log(defaultSwitch('dasuccess'))
// console.log(defaultSwitch(200409))
// console.log(defaultSwitch('does it exist'))
// console.log(defaultSwitch(9))

// CHALLENGE EXAMPLE OF SWITCH STATEMENT ON TEAM SELECTION
// function defaultSwitch(num) {
//     var result = ''
//     switch (num) {
//         case 'Man Utd':
//         case 'man utd':
//         case 'Man City':
//         case 'man city':
//         case 'Liverpool':
//         case 'Chelsea':
//         case 'Arsenal':
//             result = 'Top Team'
//             break;
//         case 'Leeds':
//         case 'Crystal Palace':
//         case 'Wolves':
//             result = 'Small Team'
//             break;
//         default:
//             result = 'Not in this league'
//     }
//     return result
// }
// console.log(defaultSwitch('Man Utd'))
// console.log(defaultSwitch('Crystal Palace'))
// console.log(defaultSwitch(5))
// console.log(defaultSwitch('does it exist'))

// FUNCTION WITHOUT IFSTATEMENT BUT WITH RETURN to give us boolean value (true or false)
// function getBoolean(a, b) {
//     return a > b;
// }
// console.log(getBoolean(2, 3))
// console.log(getBoolean(4, 3))

// OBJECT
// var objectName = {
//     'name': 'bolaji muhammed luqman',
//     'department': 'Electronics Engineering',
//     'age': '27',
//     'favourite': 'coding',
//     'language': 'English & Yoruba'
// }
// console.log(objectName.name)
// console.log(objectName['name'])
// console.log(objectName['name'][2])
// console.log(objectName.name[5])
// console.log(myObject().objectName)
// var objectName = {
//     'name': 'bolaji muhammed luqman',
//     'department': 'Electronics Engineering',
//     'age': 27,
//     'favourite': 'coding',
//     language: 'English & Yoruba'
// }

// function myObject() {
//     if (objectName.name == 'bolaji Muhammed luqman') {
//         return 'Absolutely Correct'
//     } else if (objectName.age == 27) {
//         return 'Wao bravo, you are a witch'
//     } else {
//         return 'Not correct'
//     }
// }
// console.log(objectName.language)
// console.log(myObject())

//MANIPULATING OBJECT FOR DIFFERENT THINGS LIKE SEARCH, UPDATE E.T.C
// function updateObject(property) {
//     var result = objectName.hasOwnProperty(property);
//     return result
// }
// console.log(updateObject('name')) //using hasOwnProperty to ask the object if it as his own properties

// You can change the values of your objects

// var objectName = {
//     'name': 'bolaji muhammed luqman',
//     'department': 'Electronics Engineering',
//     'age': 27,
//     'favourite': 'coding',
//     language: 'English & Yoruba'
// }
// objectName.name = 'BOLAJI MUHAMMED LUQMAN'
// newName = objectName.name
// console.log(newName)


// NOw let us do some example

// var objectName = {
//     'name': 'bolaji muhammed luqman',
//     'department': 'Electronics Engineering',
//     'age': 27,
//     'favourite': 'coding',
//     language: 'English & Yoruba'
// }

// function updateObject(property) {
//     if (objectName.hasOwnProperty(property)) {
//         var result = objectName[property]
//     } else {
//         return 'This `command` is not programmed for me'
//     }
//     return result
// }
// console.log(updateObject('language'))
// console.log(updateObject('ntd'))

// function updateRecord(property) {
//     if (objectName.hasOwnProperty(property)) {
//         var result = objectName[property];
//         return result
//     } else {
//         return 'This `command `(' + property + ') is not programmed'
//     }
// }
// console.log(updateRecord('a'))
// how to create nexted array and object together and manipulate the output

// var arrayAndObject = [{
//         name: 'My Name',
//         date: '0-11-11',
//         comment: 'I am a badass Javascript programmer'
//     },
//     {
//         club: 'What club',
//         env: 'Very Dope Environment'
//     },
//     {
//         party: 'NTYTP',
//         myMind: 'Thanks to my Mentor'
//     }
// ]

// console.log(arrayAndObject[0].name)
// console.log(arrayAndObject[1].club)
// console.log(arrayAndObject[2].party)

// var arrayAndObject = [{
//         name: 'My Name',
//         date: '0-11-11',
//         comment: 'This just a complex multiple nested arrays and object',
//         list: [
//             'My taste',
//             'Badd ass',
//             'just practicing',
//         ]
//     },
//     {
//         club: 'Manchester United',
//         stadium: 'Old Trafford'
//     },
//     {
//         party: 'PDNPDF',
//         myMind: 'Thanks to my Mentor'
//     }
// ]
// console.log(arrayAndObject[0].list[0])

// How to search using object function
// var arrayAndObject = {
//     name: 'My Name',
//     date: '0-11-11',
//     comment: 'I am a badass Javascript programmer'
// }

// function search(inputSearchValue) {
//     var output = arrayAndObject[inputSearchValue]
//     return output
// }
// console.log(search('comment'))

//CHALLENGE EXCERCISE

// var informationAboutClubs = {
//     "1123": {
//         "Club": "Manchester United",
//         "Coach": "OLE GUNNNER SOLSKJAR",
//         "Best Players": [
//             "Christiano Ronaldo",
//             "Wayne Rooney",
//             "Paul Scholes"
//         ],
//         "Best Manager": "SIR ALEX FERGUSON"
//     },
//     "1903": {
//         "Club": "Barcelona",
//         "Coach": "RONALD KOEMAN",
//         "Best Players": [
//             "Lionel Messi",
//             "Iniester",
//             "Ronaldiho"
//         ],
//         "Best Manager": "PEP GUARDIOLA"
//     },
//     "1387": {
//         "Club": "Real Madrid",
//         "Coach": "Zinedine Zidane",
//         "Best Players": [
//             "Kaka",
//             "Sergio Ramos",
//             "Marcelo"
//         ],
//         "Best Manager": "ZIDANE"
//     },
// }

// function updateInfo(clubCode, property, value) {
//     if (value === "") {
//         delete informationAboutClubs[clubCode][property]
//     } else if (property === "Coach") {
//         informationAboutClubs[clubCode][property] = informationAboutClubs[clubCode][property] || [];
//         informationAboutClubs[clubCode][property].push(value);
//     } else {
//         informationAboutClubs[clubCode][property] = value;
//     }
//     return informationAboutClubs;
// }
// var collate = updateInfo(1387, "Coach", "pep")
// console.log(collate)

// ITERATE WITH WHILE LOOP

// var array = [];
// var i = 0;
// while (i < 10) {
//     array.push(i);
//     i++
// }
// console.log(array)

// ITERATE WITH FOR LOOP

// var array = [];

// for (var i = 0; i < 10; i++) {
//     array.push(i)
// }
// console.log(array)

// ITERATE WITH FOR LOOP TO GET EVEN NUMBER AND ODD NUMBER
// var even = [];

// for (var i = 0; i < 10; i += 2) {
//     even.push(i)
// }
// var odd = [];

// for (var i = 1; i < 10; i += 2) {
//     odd.push(i)
// }
// console.log(even)
// console.log(odd)

// For loop counting backwards
// var oddBackward = [];

// for (var i = 9; i > -5; i -= 2) {
//     oddBackward.push(i)
// }
// console.log(oddBackward)

//  FOR LOOP ADDUP ARRAYS
// var x = 0 + 5 + 8 + 9 + 8 + 9 + 11 + 6
// console.log(x)
// var array = [0, 5, 8, 9, 8, 9, 11, 6];
// var addup = 0;

// for (var i = 0; i < array.length; i++) {
//     addup += array[i]
//         // addup = addup + i
// }
// console.log(addup)
// console.log(i)
// console.log(array.length)

// const [x, y, , z] = [1, 2, 3, 4, 5, 6];
// console.log(x)
// console.log(y)
// console.log(z)

// NESTED OBJECT AND DESTRUCTURING
// const object = {
//     x: 1,
//     y: 2,
//     z: 3,
// }

// function get(newMe) {
//     // "use strict";
//     const { x: myX } = object
//     return myX
// }
// get(object)
// console.log(get(object))

// const object = {
//     x: { m: 4, w: 'secret' },
//     y: 2,
//     z: 3,
// }

// function get(newMe) {
//     // "use strict";
//     const { x: { w: myX } } = object
//     return myX
// }
// get(object)
// console.log(get(object))

// USING REST OPERATOR

// const rest = (function() {
//     return function rest(x, y, z) {
//         const args = [x, y, z]
//         return args.reduce((a, b) => a + b, 0)
//     }
// })();
// console.log(rest(1, 2, 3))

// const rest = (function() {
//         return function rest(...args) {
//             // const args = [x, y, z]
//             return args.reduce((a, b) => a + b, 0)
//         }
//     })
//     ()
// console.log(rest(1, 2, 3))

//using try and catch in javascript for errors

// function freezeVal() {
//     "use strict";
//     const CONSTANT = {
//         val: 22 / 7
//     }

//     Object.freeze(CONSTANT)
//     try {
//         CONSTANT.val = 18
//     } catch (ex) {
//         console.log(ex)
//     }
//     return CONSTANT.val
// }
// const val = freezeVal()
// console.log(val)
// var name = 'Bolaji'

// var command = function() {
//     return name
// }()

// console.log(command)
// var concatenate = function(arr1, arr2) {
//     var val = arr1.concat(arr2)
//     return val
// }
// console.log(concatenate([1, 2, 3], [4, 5, 6]))
//instead of doin that we can make it short
// const concatenate = (arr1, arr2) => arr1.concat(arr2)

// console.log(concatenate([1, 2, 3], [4, 5, 6]))

//JAVASCRIPT DOM
// -The getElementById Method
// The innerHTML Property
//  HTML Elements
// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections
// document.getElementsByTagName(" your element tags");
// document.getElementsByClassName("");
// document.querySelectorAll
// document.write(Date());
// Changing the Value of an Attribute
// To change the value of an HTML attribute, use this syntax:
// document.getElementById(id).attribute = new value
// Changing HTML Style
// To change the style of an HTML element, use this syntax:
// document.getElementById(id).style.property = new style
// <button onclick="displayDate()">Try it</button>
// element.addEventListener("mouseover", myFunction);
// element.addEventListener("click", mySecondFunction);
// element.addEventListener("mouseout", myThirdFunction);

/* <html> is the JAVASCRIPT NODE
<html> has no parents
<html> is the parent of <head> and <body>
<head> is the first child of <html>
<body> is the last child of <html>
and:

<head> has one child: <title>
<title> has one child (a text node): "DOM Tutorial"
<body> has two children: <h1> and <p>
<h1> has one child: "DOM Lesson one"
<p> has one child: "Hello world!"
<h1> and <p> are siblings
Navigating Between Nodes
You can use the following node properties to navigate between nodes with JavaScript:

parentNode
childNodes[nodenumber]
firstChild
lastChild
nextSibling
previousSibling */

/* <html>
<body>

<h1 id="id01">My First Page</h1>
<p id="id02"></p>

<script>
document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
</script>

</body>
</html> */

//     <h1 id="id01">My First Page</h1>
// <p id="id02"></p>

// <script>
// document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;
// </script>

// The nodeType Property
// The nodeType property is read only. It returns the type of a node.

// Example
// <h1 id="id01">My First Page</h1>
// <p id="id02"></p>

// <script>
// document.getElementById("id02").innerHTML = document.getElementById("id01").nodeType;
// </script>

// This code creates a new <p> element:

// var para = document.createElement("p");
// To add text to the <p> element, you must create a text node first. This code creates a text node:

// var node = document.createTextNode("This is a new paragraph.");
// Then you must append the text node to the <p> element:

// para.appendChild(node);
// Finally you must append the new element to an existing element.

/* <div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);
</script> */

// This code finds an existing element:

// var element = document.getElementById("div1");
// This code appends the new element to the existing element:

// element.appendChild(para);

// Removing Existing HTML Elements
// To remove an HTML element, use the remove() method:

// Example
// <div>
//   <p id="p1">This is a paragraph.</p>
//   <p id="p2">This is another paragraph.</p>
// </div>

// <script>
// var elmnt = document.getElementById("p1");
// elmnt.remove();
// </script>

// Removing a Child Node
// For browsers that does not support the remove() method, you have to find the parent node to remove an element:

// Example
// <div id="div1">
//   <p id="p1">This is a paragraph.</p>
//   <p id="p2">This is another paragraph.</p>
// </div>

// <script>
// var parent = document.getElementById("div1");
// var child = document.getElementById("p1");
// parent.removeChild(child);
// </script>

// This HTML document contains a <div> element with two child nodes (two <p> elements):

// <div id="div1">
//   <p id="p1">This is a paragraph.</p>
//   <p id="p2">This is another paragraph.</p>
// </div>
// Find the element with id="div1":

// var parent = document.getElementById("div1");
// Find the <p> element with id="p1":

// var child = document.getElementById("p1");
// Remove the child from the parent:

// parent.removeChild(child);
// Here is a common workaround: Find the child you want to remove, and use its parentNode property to find the parent:

// var child = document.getElementById("p1");
// child.parentNode.removeChild(child);