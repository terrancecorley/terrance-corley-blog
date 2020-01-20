---
title: "JavaScript Array Methods: pop(), push(), shift(), and unshift()"
date: "2020-01-19"
content: "Web Developer Terrance Corley explains the pop, push, shift, and unshift methods in JavaScript."
---

The `pop`, `push`, `shift`, and `unshift` methods all mutate the existing array they are being called on. Without getting too into the specifics of "mutating", just know this means these methods modify the existing array.   

## Examples  

### pop()  
```javascript
    const people = ['cory', 'sam', 'mike', 'trish'];  

    const lastPersonInArray = people.pop();
    console.log(lastPersonInArray); // 'trish'
```  
The pop() method returns the last item in the array, the item it "pops" off the array. The pop() method will return `undefined` if called on an empty array. 

### push()    
```javascript
    const people = ['cory', 'sam', 'mike', 'trish'];
    people.push('sara', 'tim');
    const lengthOfNewArray = people.push('jake');
    console.log(people); // ['cory', 'sam', 'mike', 'trish', 'sara', 'tim', 'jake']
    console.log(lengthOfNewArray); // 7
```  
The push() method will add one or more values to the end of an array and return the length of the new array.

### shift()  
```javascript
    const people = ['cory', 'sam', 'mike', 'trish'];

    const firstPersonInArray = people.shift();
    console.log(firstPersonInArray); // 'cory'
```  
The shift() method will remove and return the first item in the array. As you can see this works similarily to pop() but instead of acting on the last item in the array it acts on the first item. Just like pop() this method will return undefined if called on an empty array. 

### unshift()  
```javascript
    const people = ['cory', 'sam', 'mike', 'trish'];
    people.unshift('sara', 'tim');
    const lengthOfNewArray = people.unshift('jake');
    console.log(people); // ['jake', 'sara', 'tim', 'cory', 'sam', 'mike', 'trish']
    console.log(lengthOfNewArray); // 7
```  
The shift() method will add one or more items to the beginning of an array. As you can see this works similarily to push() but instead of acting on the end of the array, it acts on beginning of an array. 

## The Takeaway  
The shift() and pop() methods are for removing items and the unshift() and push() methods are for adding items. Whether or not you should use methods like these that **mutate** the original array and go against the rules of functional programming is a completely different discussion but I recommend reading [this article](https://lorenstewart.me/2017/01/22/javascript-array-methods-mutating-vs-non-mutating) to learn more. 
--- 
Thank you for taking the time to read my post today if you've made it this far! Happy coding! :)